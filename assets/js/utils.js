function request (url, options = {}) {
  const params = Object.assign(options, { mode: 'cors' })
  let response = null
  if (options.auth) {
    params.headers = options.headers || {}
    Object.assign(params.headers, { Authorization: options.auth })
  }
  if (options.data) {
    if (!options.method) options.method = 'post'
    options.body = typeof options.data === 'string'
                 ? options.data
                 : JSON.stringify(options.data)
  }
  return fetch(url, params)
    .then((r) => {
      response = r
      response.isBinary = false
      const contentType = r.headers.get('Content-Type')
      if (contentType && contentType.startsWith('application/vnd.openxmlformats')) {
        r.isBinary = true
        return r.arrayBuffer()
      }
      return contentType && contentType.includes('application/json')
        ? r.json()
        : r.text()
    })
    .then((data) => {
      response.data = data
      return response
    })
    .catch(console.error.bind(console))
}
