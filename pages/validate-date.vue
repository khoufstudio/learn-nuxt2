<template>
  <div>
    <div>validate date</div>
    <form action="#" @submit.prevent="onSubmit">
      <div>
        <ValidationProvider v-slot="{ errors }" rules="required|validate-promotion-date:@date2">
          <input id="date1" v-model="date1" type="date" name="date1">
          <p class="text-red-600">
            {{ errors[0] }}
          </p>
        </ValidationProvider>
      </div>
      <div>
        <ValidationProvider v-slot="{ errors }" rules="required" name="date2">
          <input id="date2" v-model="date2" type="date" name="date2">
          <p class="text-red-600">
            {{ errors[0] }}
          </p>
        </ValidationProvider>
      </div>
      <div>
        <button type="submit">
          simpan
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { ValidationProvider, extend } from 'vee-validate'

extend('validate-promotion-date', {
  params: ['target'],
  validate (value, { target }) {
    if (target === null) { return true }

    const _startDate = Date.parse(value)
    const _endDate = Date.parse(target)

    return _startDate >= _endDate
  },
  message: 'End Time must be greather than Start Time'
})

export default {
  components: {
    ValidationProvider
  },
  data () {
    return {
      date1: null,
      date2: null
    }
  },
  methods: {
    onSubmit () {
      console.log('test')
    }
  }
}
</script>
