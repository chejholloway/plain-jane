import PubSub from '../js/lib/pubsub'

class Store {
  constructor (params) {
    const self = this
    self.actions = {}
    self.mutations = {}
    self.state = {}
    self.status = 'resting'
    self.events = new PubSub()

    if (params.actions) self.actions = params.actions
    if (params.mutations) self.mutations = params.mutations

    self.state = new Proxy(params.state || {}, {
      set: (state, key, value) => {
        console.log('>>2', state, key, value)
        state[key] = value

        console.log(`stateChange: ${key}: ${value}`)
        console.log('self.state ', self.state)

        self.events.publish('stateChange', self.state)

        if (self.status !== 'mutation') {
          console.warn(`You should use a mutation to set ${key}`)
        }

        self.status = 'resting'

        return true
      }
    })
  }

  dispatch (actionKey, payload) {
    const self = this

    if (typeof self.actions[actionKey] !== 'function') {
      console.error(`Action ${actionKey} doesn't exist.`)
      return false
    }

    console.groupCollapsed(`ACTION: ${actionKey}`)
    self.status = 'action'
    console.log('>>this')
    self.actions[actionKey](self, payload)
    console.groupEnd()

    return true
  }

  commit (mutationKey, payload) {
    const self = this

    if (typeof self.mutations[mutationKey] !== 'function') {
      console.log(`Mutation "${mutationKey}" doesn't exist.`)
      return false
    }

    self.status = 'mutation'

    const newState = self.mutations[mutationKey](self.state, payload)

    console.log('>>1 newSTate: ', newState)
    self.state = Object.assign(self.state, newState)

    return true
  }
}

export default Store
