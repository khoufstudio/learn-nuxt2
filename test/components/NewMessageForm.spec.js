import { mount } from '@vue/test-utils'
import NewMessageForm from '~/components/NewMessageForm'

describe('NewMessageForm', () => [
  let wrapper
  beforeEach(() => {
    wrapper = mount(NewMessageForm)
  })
  describe('clicking the send button', () => {
    beforeEach(() => {
      wrapper.find("[data-test='messageText']").setValue('New Message')

      wrapper.find("[data-test='sendButton']").trigger('click')
    })

    it('coy', () => {
      expect(1).toBe(1)
    })
  })
])
