<script setup>
import { computed, ref } from 'vue'
import SelectWithProps from '@/components/SelectWithProps.vue'
const selectedValue = ref('1')
const buttonStateDisable = computed(() => selectedValue.value === '1')

const coyy = () => window.alert('coy')

function handleChild (val) {
  selectedValue.value = val
}

</script>

<template>
  <div class="p-3">
    <div>
      In parent: {{ selectedValue }}
    </div>
    <select-with-props :parent-value="selectedValue" @some-event="handleChild" />
    <button :disabled="buttonStateDisable" class="bg-blue-700 text-white p-3" @click="coyy">
      save
    </button>
  </div>
</template>
