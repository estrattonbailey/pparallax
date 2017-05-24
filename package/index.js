import srraf from 'srraf'

const getPosition = (node, y) => {
  const offset = window.innerHeight
  const y2 = y + offset
  const nodeTop = node.getBoundingClientRect().top + y
  const nodeBot = nodeTop + node.offsetHeight

  return {
    visible: (nodeBot >= y - offset) && (nodeTop <= y2 + offset),
    top: nodeTop,
    bottom: nodeBot,
    height: node.clientHeight
  }
}

const pparallax = (outer, inner, { offset = 0 }) => {
  if (/iP(ad|hone|od).*OS\s7.*/.test(navigator.userAgent)) return false

  offset = Math.abs(offset)

  return srraf.use(({ currY }) => {
    const innerHeight = inner.clientHeight
    const node = getPosition(outer, currY)

    const overflow = innerHeight > node.height

    outer.classList[overflow ? 'add' : 'remove']('pparallax')

    if (overflow) {
      const scroll = window.pageYOffset + window.innerHeight
      const travel = scroll > (node.top + offset) ? scroll - (node.top + offset) : 0
      const distanceToBottom = document.documentElement.scrollHeight - node.bottom
      const scrollableDistance = (distanceToBottom < window.innerHeight ? distanceToBottom : window.innerHeight) + node.height - offset

      const displace = (((innerHeight - node.height) / scrollableDistance) * travel).toFixed(2)

      inner.style.transform = `translate3d(0, -${displace}px, 0)`
    }
  })
}

export { pparallax }
export default pparallax
