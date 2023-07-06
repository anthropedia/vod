 // Lego version 2.0.0-beta.5
  import { h, Component } from './lego.min.js'
  

  
  import page from "/assets/vendors/page.js"

  const state = {
    currentPage: '',
    videoId: '',
  }
  
  function connected() {
    page('/', () => { this.render({ currentPage: 'home' }) })
    page('/video/:id', (ctx) => {
      this.render({
        videoid: ctx.params.id,
        currentPage: 'video'
      })
    })
  
    page({ hashbang: true })
  }


  const __template = function({ state }) {
    return [  
    h("header", {}, [
      h("h1", {"id": `logo`}, [
        h("a", {"href": `/`}, [
          h("img", {"src": `https://assets.tci.anthropedia.org/images/anthropedia.svg`, "alt": `Anthropedia Foundation`}, "")
        ])
      ]),
      ((state.page === 'introduction') ? h("section", {"id": `language`}, [
        h("button", {"value": `en`, "onclick": (typeof switchLanguage === 'function' ? switchLanguage.bind(this) : this.switchLanguage).bind(this)},           h("img", {"alt": `English`, "title": `English`, "src": `https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg`}, "")),
        h("button", {"value": `fr`, "onclick": (typeof switchLanguage === 'function' ? switchLanguage.bind(this) : this.switchLanguage).bind(this)},           h("img", {"alt": `Français`, "title": `Français`, "src": `https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_France_%281790%E2%80%931794%29.svg`}, "")),
        h("button", {"value": `se`, "onclick": (typeof switchLanguage === 'function' ? switchLanguage.bind(this) : this.switchLanguage).bind(this)},           h("img", {"alt": `Swedish`, "title": `Swedish`, "src": `https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg`}, ""))
      ]) : '')
    ]),
    h("main", {}, [
      ((state.currentPage == 'home') ? h("x-list", {}, "") : ''),
      ((state.currentPage == 'video') ? h("x-video", {"videoid": state.videoid}, "") : '')
    ])
  ]
  }

  const __style = function({ state }) {
    return h('style', {}, `
      @import url('/assets/css/main.css');
      
      header {
        padding: .1rem 1rem;
        background-color: var(--white-background);
        box-shadow: .3rem 0 .5rem rgba(0, 0, 0, .4);
        position: sticky;
        top: 0;
        z-index: 3;
      }
    
      #logo {
        width: 5rem;
      }
    
      #logo a,
      #logo img {
        display: inline-block;
        width: 100%;
      }
    
      footer {
        color: white;
        padding: 1rem;
        font-size: .6rem;
      }
    
      header {
        display: flex;
      }
    
      #language {
        flex: 1;
        align-self: center;
        text-align: right;
      }
    
      #language button {
        max-width: 2rem;
        border: 0;
        background: none;
        cursor: pointer;
      }
    
      #language img {
        width: 26px;
        height: 18px;
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

  
