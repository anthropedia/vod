// Lego version 2.0.0-beta.4
import { h, Component } from './lego.min.js'



  const state = {
    audios: [
      {
        id: 1,
        title: "Audio 1",
        image: "https://image.isu.pub/161209005137-f7a45eba24d5e27a7ebd5c6e70a05a3b/jpg/page_1.jpg",
        description: "Discover the meaning of pleasure and satisfaction.",
      },
      {
        id: 2,
        title: "Audio 2",
        image: "https://image.isu.pub/161209005137-f7a45eba24d5e27a7ebd5c6e70a05a3b/jpg/page_1.jpg",
        description: "Discover the meaning of pleasure and satisfaction.",
      },
      {
        id: 3,
        title: "Audio 3",
        image: "https://image.isu.pub/161209005137-f7a45eba24d5e27a7ebd5c6e70a05a3b/jpg/page_1.jpg",
        description: "Discover the meaning of pleasure and satisfaction.",
      },
    ],
    videos: [
      {
        id: 1,
        title: "DVD 1",
        image: "https://image.isu.pub/161209005137-f7a45eba24d5e27a7ebd5c6e70a05a3b/jpg/page_1.jpg",
        description: "Discover the meaning of pleasure and satisfaction.",
      },
      {
        id: 2,
        title: "DVD 2",
        image: "https://image.isu.pub/161209005137-f7a45eba24d5e27a7ebd5c6e70a05a3b/jpg/page_1.jpg",
        description: "Discover the meaning of pleasure and satisfaction.",
      },
      {
        id: 3,
        title: "DVD 3",
        image: "https://image.isu.pub/161209005137-f7a45eba24d5e27a7ebd5c6e70a05a3b/jpg/page_1.jpg",
        description: "Discover the meaning of pleasure and satisfaction.",
      },
    ]
  }


const __template = function({ state }) {
  return [  
    h("article", {"class": `block`}, [
      h("h1", {}, `Available Audios And Videos`),
      h("section", {}, [
        h("h2", {}, `Listen To The Know Yourself Audio Series`),
        ((state.videos).map((item) => (h("a", {"class": `item`, "href": `/video/${item.id}`}, [
          h("h3", {}, `${ item.title }`),
          h("img", {"src": item.image, "alt": item.title}, ""),
          h("p", {}, `${ item.description }`)
        ]))))
      ]),
      h("section", {}, [
        h("h2", {}, `Watch The Know Yourself Videos Series`),
        ((state.videos).map((item) => (h("a", {"class": `item`, "href": `/video/${item.id}`}, [
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
        box-shadow: 1px 1px 3px rgba(8, 8, 8, 0.33);
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


