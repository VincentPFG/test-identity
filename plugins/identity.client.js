import identity from 'netlify-identity-widget'

export default (_, inject) => {
  identity.init({
    APIUrl: 'https://loving-austin-e86800.netlify.app/.netlify/identity',
    locale: 'fr',
  })
  inject('identity', identity)
}
