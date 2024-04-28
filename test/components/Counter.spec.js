// import { render, screen, fireEvent } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import Counter2 from '@/components/Counter2.vue'

describe('check count value (more than 100)', () => {
  const wrapper = shallowMount(Counter2)

  it('more than 100', async () => {
    wrapper.setData({ count: 101 })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.isMoreThan100).toBe(true)
  })

  it('less than 100', async () => {
    wrapper.setData({ count: 99 })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.isMoreThan100).toBe(false)
  })
})
