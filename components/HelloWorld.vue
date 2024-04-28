<template>
  <div>{{ msg }}</div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'sebuah pesan'
    }
  },
  methods: {
    changeMessage (newMessage) {
      this.msg = newMessage
    }
  }
}
</script>
