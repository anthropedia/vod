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
        title: `Know Yourself, part ${id}`,
        image: "/assets/images/knowyourself-audios.jpg",
        description: "Explore Your Personality",
      };
    }),
    videos: Array(16).fill().map((_, i) => {
      const id = i + 1
      return {
        id,
        title: `DVD ${id}`,
        image: "/assets/images/knowyourself-dvds.jpg",
        url: "http://assets.tci.anthropedia.org/videos/hls/v1.en.m3u8",
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
