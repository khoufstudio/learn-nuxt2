import { shallowMount } from '@vue/test-utils'
import ClickLinkPages from '@/pages/click-link-composition.vue'

describe('click link pages', () => {
  it('should renderer', () => {
    const wrapper = shallowMount(ClickLinkPages)

    console.log('link download', wrapper.vm.linkDownload)

    wrapper.vm.downloadLink('coy')
    console.log('link download', wrapper.vm.linkDownload)
  })
})
