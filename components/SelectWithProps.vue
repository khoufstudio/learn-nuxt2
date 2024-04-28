<script>
import { ref } from 'vue'
export default {
  props: ['parentValue'],
  setup (props, { emit }) {
    const selectedValue = ref(1)

    function handleSelect (event) {
      const value = event.target.value
      emit('some-event', value)
    }

    return {
      selectedValue,
      handleSelect
    }
  }
}
</script>

<template>
  <div>
    <div>
      <span>In child component: </span>
      {{ selectedValue }}
    </div>
    <select v-model="selectedValue" class="bg-red-200 w-32" @change="handleSelect($event)">
      <option value="1">
        1
      </option>
      <option value="2">
        2
      </option>
      <option value="3">
        3
      </option>
    </select>
  </div>
</template>
