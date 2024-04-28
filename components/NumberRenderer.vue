<template>
  <div>{{ numbers }}</div>
</template>
<script>
export default {
  name: 'NumberRenderer',
  props: {
    even: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    numbers () {
      const element = []
      const moduloResult = this.even ? 0 : 1
      for (let i = 1; i < 10; i++) {
        if (i % 2 === moduloResult) {
          element.push(i)
        }
      }
      return element.join(', ')
    }
  }
}
</script>
