import { mount } from '@vue/test-utils'
import Emitter from '@/components/Emitter.vue'

describe('Emitter', () => {
  it('emits an event with two argument', () => {
    const wrapper = mount(Emitter)

    wrapper.vm.emitEvent()

    console.log(wrapper.emitted().myEvent)
    expect(wrapper.emitted().myEvent[0]).toEqual(['name', 'password'])
  })
})
