<script setup>
import { reactive } from 'vue'

const state = reactive({ count: 0 })

function increment () {
  state.count++
}
</script>

<template>
  <div style="padding: 40px;">
    <button style="background: blue;color: white;padding: 20px;" @click="increment">
      {{ state.count }}
    </button>
  </div>
</template>
