<template>
  <div class="p-4">
    <p class="time-clicked">
      times clicked: {{ count }}
    </p>
    <button class="bg-blue-300 p-2 font-semibold" @click="increment">
      increment
    </button>

    <div v-show="isMoreThan100">
      lebih dari 100 muncul
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    count: 0,
    isMoreThan100: false
  }),
  watch: {
    count (val) {
      if (val > 100) {
        this.isMoreThan100 = true
      } else {
        this.isMoreThan100 = false
      }
    }
  },
  methods: {
    increment () {
      this.count++
    }
  }
}
</script>
