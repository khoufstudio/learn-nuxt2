<template>
  <div>
    <p>test</p>
    <span v-show="showSpan">parent component</span>
    <Child v-if="showChild" />
  </div>
</template>
<script>
export default {
  components: {
    Child: () => '@/components/Child.vue'
  },
  data () {
    return {
      showSpan: false,
      showChild: false
    }
  }
}
</script>
