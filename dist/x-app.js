// Lego version 2.0.0-beta.3
import { h, Component } from './lego.min.js'


undefined

const __template = function({ state }) {
  return [  
`
  Know Yourself
`
  ]
}

const __style = function({ state }) {
  return h('style', {}, `
    
    
  `)
}

// -- Lego Core
let render = async function (state) {}

export default class Lego extends Component {
  constructor() {
    super()
    try {
      this.__state = state
    } catch {}
    render = this.render.bind(this)
    try {
      constructed(this)
    } catch {}
  }
  get vdom() { return __template }
  get vstyle() { return __style }
}
// -- End Lego Core


