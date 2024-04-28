import { mount } from '@vue/test-utils'
import LearnUnitTest from '@/pages/learn-unit-test.vue'

const factory = (propsData) => {
  return mount(LearnUnitTest, propsData)
}
describe('learn-unit-test.vue', () => {
  it('renders default', () => {
    const wrapper = factory()

    expect(wrapper.html().includes('hanya tampil di input 1 dan 2')).toBe(true)
  })

  it('renders with no props', () => {
    const wrapper = factory()

    expect(wrapper.html().includes('props foo: foo')).toBe(true)
  })

  it('renders with props', () => {
    const wrapper = factory({
      propsData: {
        foo: 'cuy'
      }
    })

    expect(wrapper.find('p.props').text().includes('props foo: cuy')).toBe(true)
  })
})
