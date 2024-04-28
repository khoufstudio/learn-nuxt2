import { shallowMount } from '@vue/test-utils'
import TestFetchData from '@/pages/test-fetch-data'

describe('Test Fetch Data', () => {
  it('call rest api using fetch api', (done) => {
    const mockSuccessResponse = ['a', 'b', 'c']
    const mockFetchPromise = Promise.resolve({
      json: () => Promise.resolve(mockSuccessResponse)
    })

    global.fetch = jest.fn().mockResolvedValue(mockFetchPromise)

    const wrapper = shallowMount(TestFetchData)

    expect(wrapper.exists())

    done()
  })
})
