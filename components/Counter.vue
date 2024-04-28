<template>
  <div>
    <p class="time-clicked">
      times clicked: {{ count }}
    </p>
    <button class="bg-blue-400 p-2 text-white" @click="increment">
      increment
    </button>
    <div v-if="isShow">
      cuy
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment () {
  count.value++
}
</script>
