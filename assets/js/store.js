import { LegoStore } from '../vendors/store.js'

const store = new LegoStore(
  {
    media: {
      audios: [
        {
          id: 1,
          title: "Audio 1",
          image: "https://image.isu.pub/161209005137-f7a45eba24d5e27a7ebd5c6e70a05a3b/jpg/page_1.jpg",
          description: "Explore Your Personality",
        },
        {
          id: 2,
          title: "Audio 2",
          image: "https://image.isu.pub/161209005137-f7a45eba24d5e27a7ebd5c6e70a05a3b/jpg/page_1.jpg",
          description: "Understanding Your Thoughts",
        },
        {
          id: 3,
          title: "Audio 3",
          image: "https://image.isu.pub/161209005137-f7a45eba24d5e27a7ebd5c6e70a05a3b/jpg/page_1.jpg",
          description: "Pleasure and satisfaction.",
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
  }
)

export default store
