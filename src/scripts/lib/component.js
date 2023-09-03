import Store from '../../store/store.js'

export default class Component {
  constructor (props = {}) {
    const self = this

    this.render = this.render || function () {}
    if (props.store instanceof Store) props.store.events.subscribe('stateChange', () => self.render())
    if ('element' in props) this.element = props.element
  }
}
