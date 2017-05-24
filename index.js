import pparallax from '../package/dist/index.js'

window.addEventListener('DOMContentLoaded', e => {
  const outer = document.getElementById('outer')
  const inner = document.getElementById('inner')
  const instance = pparallax(outer, inner)
})
