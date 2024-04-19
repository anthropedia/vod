import { LegoStore } from '../vendors/store.js'
import { api } from '../js/core.js'
import page from "/assets/vendors/page.js"


const state = {
  user: {},
  media: {
    audios: Array(16).fill().map((_, i) => {
      const id = i + 1
      return {
        id,
        title: `1${id} KY 10 AG Ch ${id}`,
        url: "https://assets.tci.anthropedia.org/media/AG10/11%20KY%2010%20AG%20Ch%201%20%28Eng%29%20-%207_13_15.wav",
        image: "https://image.isu.pub/161209005137-f7a45eba24d5e27a7ebd5c6e70a05a3b/jpg/page_1.jpg",
        description: "Explore Your Personality",
      }
    }),
    videos: Array(16).fill().map((_, i) => {
      const id = i + 1
      return {
        id,
        title: `DVD ${id}`,
        image: "https://image.isu.pub/161209005137-f7a45eba24d5e27a7ebd5c6e70a05a3b/jpg/page_1.jpg",
        url: "https://assets.tci.anthropedia.org/media/Know_Yourself_Videos_091823/Know%20Yourself%20Part%20%2010_EN.mp4",
        description: "In this series you will discover the notion of pleasure and satisfaction and start challeging the concepts behind.",
      }
    })
  }
}

const actions = {
  async login(email) {
    const response = await api('/video/auth', { data: { email } })
    if(!response.ok) return console.error(response.data)
    const user = response.data
    localStorage.setItem('user', JSON.stringify(user))
    this.setState({ user })
    this.actions.redirect('')
    return user
  },

  async autoLogin() {
    try {
      const email = JSON.parse(localStorage.getItem("user")).email
      const user = await this.actions.login(email)
      if(!user) this.actions.redirect("login")
    } catch(e) {
      console.error(e)
      this.actions.redirect("login")
      return null
    }
  },

  redirect(url) {
     page.redirect(url.startsWith('/') ? url : `/${url}`)
  }
}

const store = new LegoStore(state, actions)

export default store
