<template>
  <div>
    <div>selected in child: {{ selectedInChild }}</div>
    <select v-model="selectedInChild" @change="coy($event)">
      <option value="test">
        test
      </option>
      <option value="tost">
        tost
      </option>
      <option value="tist">
        tist
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: ['selected'],
  data () {
    return {
      selectedInChild: this.selected
    }
  },
  methods: {
    coy (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
