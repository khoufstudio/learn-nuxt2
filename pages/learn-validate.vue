<script setup>
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { ref } from 'vue'

const username = ref('')

extend('min-3-length', (val) => {
  return val.length > 2
})

</script>
<template>
  <div>
    <ValidationObserver v-slot="{ invalid }">
      <form @submit.prevent="onSubmit">
        <ValidationProvider
          v-slot="{ errors }"
          name="Username"
          rules="required|min-3-length"
        >
          <input v-model="username" type="text" placeholder="test">
          <span class="text-red-400">{{ errors[0] }}</span>
          {{ invalid }}
        </ValidationProvider>
      </form>
    </ValidationObserver>
  </div>
</template>
