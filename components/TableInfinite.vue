<template>
  <div>
    <table class="table-auto leading-normal w-full">
      <thead class="sticky top-0">
        <tr>
          <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase w-5">
            No
          </th>
          <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Image
          </th>
          <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Width
          </th>
          <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Height
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="isLoading && firstLoading">
          <tr v-for="i in limit" :key="'coy' + i">
            <td class="p-3 border-b border-gray-200 text-sm bg-white font-semibold text-gray-500 animate-pulse">
              <div class="h-6 bg-gray-200 rounded" />
            </td>
            <td class="p-3 border-b border-gray-200 text-sm bg-white font-semibold text-gray-500">
              <div class="h-6 bg-gray-200 rounded" />
            </td>
            <td class="p-3 border-b border-gray-200 text-sm bg-white font-semibold text-gray-500">
              <div class="h-6 bg-gray-200 rounded" />
            </td>
            <td class="p-3 border-b border-gray-200 text-sm bg-white font-semibold text-gray-500">
              <div class="h-6 bg-gray-200 rounded" />
            </td>
          </tr>
        </template>
        <tr v-if="isError">
          <td colspan="4">
            error
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="result.length > 0" ref="cu" class="h-[500px]">
      <DynamicScroller
        ref="scroller"
        class="h-full"
        :items="result"
        key-field="id"
        :min-item-size="20"
        @scroll.native.passive="handleScroll"
      >
        <template #default="{ item: res, index: key, active }">
          <DynamicScrollerItem
            :item="res"
            :active="active"
            :data-index="key"
          >
            <td class="p-3 border-b border-gray-200 text-sm bg-white font-semibold text-gray-500">
              {{ (key + 1) }}
            </td>
            <td class="p-3 border-b border-gray-200 text-sm bg-white">
              <img :src="res.url" alt="tes" class="h-[30px]">
            </td>
            <td class="p-3 border-b border-gray-200 text-sm bg-white">
              {{ res.width }}
            </td>
            <td class="p-3 border-b border-gray-200 text-sm bg-white">
              {{ res.height }}
            </td>
          </DynamicScrollerItem>
        </template>
      </DynamicScroller>
    </div>
    <div class="mt-4">
      <p class="font-bold text-2xl">
        Scroll Top: {{ scrollTop }}
      </p>
      <p class="font-bold text-2xl">
        Last Bottom: {{ lastBottom }}
      </p>
      <p class="font-bold text-2xl">
        Scroll Height: {{ scrollHeight }}
      </p>
    </div>
    <transition
      enter-class="opacity-0 translate-y-[30px]"
      leave-to-class="opacity-0 translate-y-[30px]"
    >
      <div
        v-if="isLoading && result.length > 0"
        class="fixed bottom-7 left-1/2 -translate-x-1/2 py-1 px-5 rounded bg-blue-500 text-white transition-all duration-200"
      >
        Please Wait
      </div>
    </transition>
  </div>
</template>
<script>
import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
export default {
  components: {
    DynamicScroller,
    DynamicScrollerItem
  },
  data () {
    return {
      result: [],
      currentPage: 1,
      scrollPosition: 0,
      firstLoading: true,
      isLoading: true,
      isError: false,
      limit: 10,
      getDataStatus: false,
      scrollTop: 0,
      lastBottom: 0,
      scrollHeight: 0
    }
  },
  async mounted () {
    this.result = await this.getData()
    this.isLoading = false
    this.firstLoading = false
  },
  methods: {
    async getData () {
      // eslint-disable-next-line no-console
      console.log('getData')
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search?' +
          new URLSearchParams({
            page: this.currentPage,
            limit: this.limit
          }),
        {
          headers: {
            'x-api-key': 'live_Ovw9MbZYlcqysjzYxmU1xS0SivF8ZRu7fR2J8whG36CyLRCkgif4wfSVXABFCVC5'
          }
        }
      )

      const data = await response.json()

      return data
    },
    async handleScroll (event) {
      if (!event?.target) { return }

      this.scrollHeight = event.target.scrollHeight
      const { scrollTop } = event.target
      if (this.scrollTop >= this.lastBottom || this.scrollTop > 0.8 * this.scrollHeight) {
        if (!this.isLoading) {
          this.isLoading = true

          this.currentPage += 1
          const result = await this.getData()
          this.result = this.result.concat(result)
          this.isLoading = false
        }
      }

      this.lastBottom = scrollTop > this.lastBottom ? scrollTop : this.lastBottom
      this.scrollTop = scrollTop
    }
  }
}
</script>
