import { state } from '~/store/counter'

export default function storeConfig () {
  return {
    modules: {
      counter: { state }
    }
  }
}
