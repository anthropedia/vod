 // Lego version 2.0.0-beta.5
  import { h, Component } from './lego.min.js'
  

  
  const state = { videoid: 0 }

  function connected() {
    
  }


  const __template = function({ state }) {
    return [  
    h("article", {"class": `block`}, [
      h("h1", {}, [
`Know Yourself Part `,
        h("span", {"videoid": state.videoid}, ""),
`${ state.videoid }`
      ]),
      h("p", {}, `In this series you will discover the notion of pleasure and satisfaction and start challeging the concepts behind.`),
      h("video", {"controls": ``, "width": `100%`}, [
        h("source", {"src": `/media/cc0-videos/flower.webm`, "type": `video/webm`}, ""),
        h("source", {"src": `https://tube.collectivite.org/videoplayback?expire=1688630910&ei=HiKmZLKOIpi1xN8P2NGVsA4&ip=37.187.91.99&id=o-AHhl1A_xiODZBeDr34BmgWLLZ4Ar57UqmrZMPT61uLtd&itag=18&source=youtube&requiressl=yes&mh=Kr&mm=31%2C26&mn=sn-25ge7nzk%2Csn-4g5e6nz7&ms=au%2Conr&mv=u&mvi=5&pl=23&spc=Ul2Sq3yq-5x9A6ZUQccgUCyKKs8rzF4&vprv=1&svpuc=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=556.234&lmt=1664770797741623&mt=1688608936&fvip=1&fexp=24007246%2C24362686&beids=24350017&c=ANDROID&txp=1438434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAJT-MPUzRGkhdDEQpPvxNo6zYBAwiTgFWNt8uzYyJ5dTAiBmlluzdDxTDAgzMtQvhjSsq27IYsFL9GfWvVlA5-iGgw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgKeGGSHd3pKNYZq2YX0PJhwbwRa1BbfwT2bOsypYCbbcCIBiCDuOOG9kQ-A7d-1a8VS-RU2Z6f-nVnErnK7A752GM&host=rr5---sn-25ge7nzk.googlevideo.com&title=Anthropedia%20Foundation%3A%20Video%20Introduction-IFISxfebs_k.mp4`, "type": `video/mp4`}, "")
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
      this.useShadowDOM = true
      if(typeof state === 'object') this.__state = Object.assign({}, state, this.__state)
      if(typeof connected === 'function') this.connected = connected
      if(typeof setup === 'function') setup.bind(this)()
    }
    get vdom() { return __template }
    get vstyle() { return __style }
  }
  // -- End Lego Core

  
