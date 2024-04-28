import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld'

describe('Hello World', () => {
  it('it is rendered correctly', () => {
    const msg = 'sebuah pesan'
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.text()).toMatch(msg)
  })
  it('it is success trigger method', () => {
    const msg = 'sebuah pesan'
    const newMsg = 'sebuah pesan'
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.vm.msg).toMatch(msg)

    wrapper.vm.changeMessage(newMsg)
    expect(wrapper.vm.msg).toMatch(newMsg)
  })
})
