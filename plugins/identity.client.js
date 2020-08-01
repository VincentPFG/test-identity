import identity from 'netlify-identity-widget'

export default (_, inject) => {
  identity.init({
    APIUrl: 'https://test-identity.netlify.app/.netlify/identity',
    locale: 'fr',
  })
  inject('identity', identity)
}
