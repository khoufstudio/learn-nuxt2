import { shallowMount } from '@vue/test-utils'
import ParentCallApiChild from '@/pages/parent-call-api-child.vue'
import ComponentWithAsyncCall from '@/components/ComponentWithAsyncCall.vue'

const factory = () => {
  return shallowMount(ParentCallApiChild)
}
describe('learn-unit-test.vue', () => {
  it('renders with mount and does initialize API call', () => {
    const wrapper = factory()

    console.log(wrapper.html())

    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBe(true)
  })
})
