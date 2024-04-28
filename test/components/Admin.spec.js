import { mount } from '@vue/test-utils'
import Admin from '@/components/Admin.vue'

const factory = (props) => {
  return mount(Admin, {
    propsData: {
      ...props
    }
  })
}

describe('Test Component Admin.vue', () => {
  it('display not authorized', () => {
    const wrapper = factory()

    expect(wrapper.text()).toBe('Not Authorized')
  })

  it('display authorized', () => {
    const wrapper = factory({ isAdmin: true })

    expect(wrapper.text()).toBe('Admin Privileges')
  })
})
