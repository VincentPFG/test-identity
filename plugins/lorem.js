import { LoremIpsum } from 'lorem-ipsum'

export default (_, inject) => inject('lorem', new LoremIpsum())
