 // Lego version 2.0.0-beta.5
  import { h, Component } from './lego.min.js'
  

  
  import store from '/assets/js/store.js'

  function setup() {
    store.subscribe(this, ['media'])
  }


  const __template = function({ state }) {
    return [  
    h("article", {"class": `block`}, [
      h("h1", {}, `Available Audios And Videos`),
      h("section", {}, [
        h("h2", {}, `Listen To The Know Yourself Audio Series`),
        ((state.media.audios).map((item) => (h("a", {"class": `item`, "href": `/video/${item.id}`}, [
          h("h3", {}, `${ item.title }`),
          h("img", {"src": item.image, "alt": item.title}, ""),
          h("p", {}, `${ item.description }`)
        ]))))
      ]),
      h("section", {}, [
        h("h2", {}, `Watch The Know Yourself Videos Series`),
        ((state.media.videos).map((item) => (h("a", {"class": `item`, "href": `/video/${item.id}`}, [
          h("h3", {}, `${ item.title }`),
          h("img", {"src": item.image, "alt": item.title}, ""),
          h("p", {}, `${ item.description }`)
        ]))))
      ])
    ])
  ]
  }

  const __style = function({ state }) {
    return h('style', {}, `
      @import url('/assets/css/main.css');
      
      section {
        margin-bottom: 3.3rem;
      }
      .item {
        text-decoration: none;
        color: inherit;
        display: inline-block;
        max-width: 288px;
        margin-right: .88rem;
        padding: .88rem;
        box-shadow: 1px 1px 8px rgba(8, 8, 8, 0.33);
        transition: box-shadow .3s;
      }
      .item:hover {
        box-shadow: 1px 1px 3px rgba(8, 8, 8, 0.55);
      }
      .item h3 {
        padding: 0;
        margin: 0;
      }
      .item img {
        width: 100%;
      }
    
    `)
  }

  // -- Lego Core
  export default class Lego extends Component {
    init() {
      this.useShadowDOM = true
      if(typeof state === 'object') this.__state = Object.assign({}, state, this.__state)
      if(typeof connected === 'function') this.connected = connected
      if(typeof setup === 'function') setup.bind(this)()
    }
    get vdom() { return __template }
    get vstyle() { return __style }
  }
  // -- End Lego Core

  
