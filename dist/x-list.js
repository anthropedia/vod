// Lego version 2.0.0-beta.3
import { h, Component } from './lego.min.js'


undefined

const __template = function({ state }) {
  return [  
    h("article", {"class": `block`}, [
`
    List of videos
    `,
      h("a", {"href": `/#!/video/1`}, `video 1`),
      h("a", {"href": `/#!/video/2`}, `video 2`),
      h("a", {"href": `/#!/video/3`}, `video 3`)
    ])
  ]
}

const __style = function({ state }) {
  return h('style', {}, `
    
    
      @import url('/assets/css/main.css');
    
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


