import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from '../__mocks__/store/counter'
import Composition from '@/pages/Composition'

const localVue = createLocalVue()
localVue.use(Vuex)

jest.mock('vue-router', () => ({
  useRoute: jest.fn(() => ({ name: 'Home', query: { coy: 'coy' } }))
}))

const store = new Vuex.Store(storeConfig())

describe('Composition Page Test', () => {
  it('is render correctly', () => {
    const wrapper = mount(Composition, {
      mocks: {
        $route: {
          query: {
            coy: 'coy'
          }
        }
      },
      localVue,
      store
    })

    console.log(wrapper.html())
    expect(wrapper.html()).toBeTruthy()
  })
})
