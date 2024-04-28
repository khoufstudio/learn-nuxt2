<template>
  <div class="bg-blue-300 p-4">
    <button class="bg-blue-500 p-4" @click="changeRoute">
      change route
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    changeRoute () {
      this.$router.push('/')
    }
  }
}
</script>
