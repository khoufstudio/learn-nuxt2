<template>
  <div>child with async call</div>
</template>
<script>
export default {
  created () {
    this.makeApiCall()
  },
  methods: {
    async makeApiCall () {
      console.log('making api call')
      await fetch('https://jsonplaceholder.typicode.com/posts/1')
    }
  }
}
</script>
