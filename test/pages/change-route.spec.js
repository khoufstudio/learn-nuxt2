import { shallowMount } from '@vue/test-utils'
import ChangeRoutePages from '@/pages/change-route.vue'

describe('click link pages', () => {
  it('should renderer', () => {
    const wrapper = shallowMount(ChangeRoutePages)

    expect(wrapper.exists()).toBeTruthy()
  })
  it('change route', () => {
    const wrapper = shallowMount(ChangeRoutePages)

    wrapper.vm.changeRoute()
    expect(wrapper.exists()).toBeTruthy()
  })
})
