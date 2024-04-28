import { mount } from '@vue/test-utils'
import NumberRenderer from '@/components/NumberRenderer.vue'

describe('NumberRenderer', () => {
  beforeEach(() => {
    console.log('di jalankan')
  })

  it('render even number', () => {
    const wrapper = mount(NumberRenderer, {
      propsData: {
        even: true
      }
    })

    expect(wrapper.text()).toBe('2, 4, 6, 8')
  })

  it('render odds number', () => {
    const wrapper = mount(NumberRenderer, {
      propsData: {
        even: false
      }
    })

    expect(wrapper.text()).toBe('1, 3, 5, 7, 9')
  })

  it('render default computed numbers', () => {
    expect(NumberRenderer.computed.numbers()).toBe('1, 3, 5, 7, 9')
  })

  it('render computed numbers using call', () => {
    const localThis = { even: true }

    expect(NumberRenderer.computed.numbers.call(localThis)).toBe('2, 4, 6, 8')
  })
})
