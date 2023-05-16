// Lego version 2.0.0-beta.4
import { h, Component } from './lego.min.js'



  const state = { videoid: 0 }

  function connected() {
    
  }


const __template = function({ state }) {
  return [  
    h("article", {"class": `block`}, [
      h("h1", {}, [
`Playing video `,
        h("span", {"videoid": state.videoid}, ""),
`${ state.videoid }`
      ])
    ])
  ]
}

const __style = function({ state }) {
  return h('style', {}, `
    @import url('/assets/css/main.css');
    
  `)
}

// -- Lego Core
export default class Lego extends Component {
  init() {
    if(typeof state === 'object') this.__state = Object.assign({}, state, this.__state)
    if(typeof setup === 'function') setup.bind(this)()
  }
  connectedCallback() {
    if(typeof connected === 'function') connected.bind(this)()
    super.connectedCallback()
  }
  get vdom() { return __template }
  get vstyle() { return __style }
}
// -- End Lego Core


