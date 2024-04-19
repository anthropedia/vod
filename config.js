const config = {
  apiUrl: document.location.host.includes('localhost')
    ? "http://localhost:3579"
    : "https://api.tci.anthropedia.org"
}

export default config
