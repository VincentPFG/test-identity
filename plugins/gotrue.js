import GoTrue from 'gotrue-js'

export default (_, inject) => {
  inject(
    'auth',
    new GoTrue({
      APIUrl: '',
    })
  )
}
