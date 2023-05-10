export default class Guidance {
  constructor() {
    this.routes = []
    window.addEventListener('hashchange', (event) => {
      this.runMatch(window.location.hash.slice(1))
    })
  }

  add(pattern, ...callbacks) {
    this.routes.push({ pattern: pattern.replace(/<([^>]+)>/g, '(?<$1>\\w+)'), callbacks })
  }

  runMatch(url) {
    this.routes.find(r => {
      const matches = url.match(r.pattern)
      console.debug('find pattern', r.pattern, matches)
      if(matches) return matches
    })
  }

  start() {
    this.runMatch(window.location.hash.slice(2))
  }
}
