<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input v-model="username" placeholder="username" data-username>
      <input type="submit">
    </form>

    <div v-if="submitted && username !== ''" class="message">
      Thank you for your submission, {{ username }}
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup () {
    const username = ref('')
    const submitted = ref(false)

    function handleSubmit () {
      submitted.value = true
    }

    return { username, submitted, handleSubmit }
  }
}
</script>
