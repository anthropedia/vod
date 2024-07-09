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
  async login(email, code) {
    const uri = "/video/auth" + (code ? "" : "/code")
    const response = await api(uri, { data: { email, code } })
    if(!response.ok) return console.error(response.data)
    const user = response.data
    if(user.id) {
      localStorage.setItem('user', JSON.stringify(user))
      this.actions.autoLogin()
    }
    return user
  },

  async autoLogin() {
    try {
      const user = JSON.parse(localStorage.getItem("user"))
      if(!user) this.actions.redirect("login")
      this.setState({ user })
      this.actions.redirect("/")
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
