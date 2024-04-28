<template>
  <div class="px-[200px] pt-8 bg-gray-200 h-screen">
    <div class="mb-4">
      <h2 class="text-2xl font-semibold leading-tight">
        Data Kucing
      </h2>
    </div>
    <div>
      <table class="table-auto leading-normal w-full">
        <thead>
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
          <template v-if="$fetchState.pending">
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
          <tr v-if="$fetchState.error">
            <td colspan="4">
              error
            </td>
          </tr>
          <template v-else>
            <tr v-for="(res, index) in result" :key="index">
              <td class="p-3 border-b border-gray-200 text-sm bg-white font-semibold text-gray-500">
                {{ (index + 1) + ((currentPage - 1) * limit) }}
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
            </tr>
          </template>
        </tbody>
      </table>
      <div class="flex justify-end mt-3 gap-2">
        <div>
          <input v-model.lazy="currentPage" class="w-12 p-2" type="number">
        </div>
        <button class="bg-gray-300 p-2" @click="prevPage">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-gray-500"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>
        <button class="bg-gray-300 p-2" @click="nextPage">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-gray-500"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      result: [],
      currentPage: 1,
      limit: 10
    }
  },
  async fetch () {
    this.result = []
    const response = await fetch(
      'https://api.thecatapi.com/v1/images/search?' +
          new URLSearchParams({
            // page: this.currentPage,
            limit: this.limit
          }),
      {
        headers: {
          'X-Auth-Token': 'live_Ovw9MbZYlcqysjzYxmU1xS0SivF8ZRu7fR2J8whG36CyLRCkgif4wfSVXABFCVC5'
        }
      }
    )

    const data = await response.json()
    this.result = data
  },
  methods: {
    nextPage () {
      this.currentPage++
      this.$fetch()
    },
    prevPage () {
      if (this.currentPage > 1) {
        this.currentPage--
        this.$fetch()
      }
    }
  }
}
</script>
