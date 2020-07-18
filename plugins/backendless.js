import backendless from 'backendless'

export default (_, inject) => {
  backendless.initApp('', '')
  inject('backendless', backendless)
}
