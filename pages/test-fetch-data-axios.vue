<template>
  <div>test</div>
</template>
<script>
import { onMounted, ref } from '@nuxtjs/composition-api'
import axios from 'axios'

export default {
  setup () {
    const url = ref('https://pokeapi.co/api/v2/ability/?limit=20&offset=20')
    const result = ref(null)
    onMounted(async () => {
      try {
        const { data } = await axios.get(url.value)
        console.log(data)
        result.value = data
      } catch (error) {
        result.value = null
        console.error(error)
      }
    })
  }
}
</script>
