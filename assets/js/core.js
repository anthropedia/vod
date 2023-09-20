import utils from './utils.js'
import config from '../../config.js'


function api(uri, options = {}) {
  return utils.request(`${config.apiUrl}${uri}`, options)
}

function _(text) {
  if (window.trans && window.trans[text]) return window.trans[text]
  return text
}

export { api, _ }
