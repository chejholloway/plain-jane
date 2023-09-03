export default class PubSub {
  constructor () {
    this.events = {}
  }

  subscribe (event, cb) {
    const self = this
    if (self.events.event !== undefined) self.events[event] = []
    return self.events[event].push(cb)
  }

  publish (event, data = {}) {
    const self = this
    if (self.events.event === undefined) return []
    return self.events[event].map((cb) => cb(data))
  }
}
