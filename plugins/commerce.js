import Commerce from '@chec/commerce.js'

export default (_, inject) => {
  inject('commerce', new Commerce(''))
}
