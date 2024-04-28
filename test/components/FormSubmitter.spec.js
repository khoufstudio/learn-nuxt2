import { mount } from '@vue/test-utils'
import FormSubmitter from '@/components/FormSubmitter.vue'

const factory = (props) => {
  return mount(FormSubmitter, {
    propsData: {
      ...props
    }
  })
}

describe('FormSubmitter', () => {
  it('reveals a notification when submitted', async () => {
    const wrapper = factory()

    await wrapper.find('[data-username]').setValue('alice')
    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.find('.message').text()).toBe('Thank you for your submission, alice')
  })

  it('notification doesnt show on submitted when data-username empty', async () => {
    const wrapper = factory()

    expect(wrapper.find('.message').exists()).toBe(false)
  })
})
