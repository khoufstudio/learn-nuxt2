<template>
  <div>coy</div>
</template>
<script>
export default {
  name: 'Emitter',
  methods: {
    emitEvent () {
      this.$emit('myEvent', 'name', 'password')
    }
  }

}
</script>
