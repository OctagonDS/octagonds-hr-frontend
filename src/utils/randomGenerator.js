const randomGenerator = (len) => {
  const args = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789'
  let str = ''
  for (let i = 0; i < len; i++) {
    const pos = Math.floor(Math.random() * args.length)
    str += args.substring(pos, pos + 1)
  }
  return str
}

export default randomGenerator
