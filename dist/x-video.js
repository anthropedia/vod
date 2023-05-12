// Lego version 2.0.0-beta.3
import { h, Component } from './lego.min.js'



  const state = { videoid: 'rr' }

  function constructed() {
    debugger
  }


const __template = function({ state }) {
  return [  
    h("article", {"class": `block`}, [
      h("h1", {}, [
`Playing video `,
        h("span", {"videoid": state.videoid}, ""),
`${ state.videoid }`
      ]),
      h("raw-html", {}, `${ _('clients.introduction') }`),
      h("a", {"class": `button`, "href": `/${state.token}/test`}, `${ _('I agree; start the test') }`)
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


