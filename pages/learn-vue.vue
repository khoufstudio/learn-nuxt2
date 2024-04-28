<template>
  <div>
    <div>learn vue</div>
    <SelectComponent v-model="selected" />
    <div>
      <p>selected value:</p>
      {{ selected }}
    </div>
  </div>
</template>
<script>
import SelectComponent from '@/components/SelectComponent.vue'
export default {
  components: {
    SelectComponent
  },
  data () {
    return {
      selected: 'test'
    }
  }
}
</script>
