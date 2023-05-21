// Lego version 2.0.0-beta.4
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
        h("source", {"src": `https://tube.collectivite.org/videoplayback?expire=1684719768&ei=OHRqZPPdN5mcvdIPuuCuwAU&ip=37.187.91.99&id=o-AKFLCdOTQtMEnSoJ9IrPJH6A6WSeS8nMF1XhhjiSw55f&itag=18&source=youtube&requiressl=yes&mh=Kr&mm=31%2C26&mn=sn-25ge7nzk%2Csn-4g5e6nz7&ms=au%2Conr&mv=m&mvi=5&pl=21&initcwndbps=135000&spc=qEK7B5zNIox8mrbqc0FL-xfy-fVxSrg&vprv=1&svpuc=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=556.234&lmt=1664770797741623&mt=1684697825&fvip=1&fexp=24007246%2C24363392&beids=24350018&c=ANDROID&txp=1438434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgZ6qNwlbG3aFl3JVzoqoOxRb7jYySu6JTwKo5lpuxqgsCIQC7nxzjbtd1WGYmcSTOhUHjEf1jIg07z-NqkcBLhN0uuQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgJaQIxpLV-zBgVjIj0x2bjrQStCkH-bTnNTzx4qIlJt0CIBUvXRr0m1osaXQPnUsF2dfNRf5es_nfIyLsjZoBz5Px&host=rr5---sn-25ge7nzk.googlevideo.com&title=Anthropedia%20Foundation%3A%20Video%20Introduction-IFISxfebs_k.mp4`, "type": `video/mp4`}, "")
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


