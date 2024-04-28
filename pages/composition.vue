<template>
  <div>
    <p>
      {{ coy }}
    </p>
    <p>
      test {{ count }}
    </p>
    <Child />

    <button class="bg-blue-400" @click="movePage()">
      move page coy
    </button>
  </div>
</template>
<script>
import { useStore, useRoute, useRouter, computed } from '@nuxtjs/composition-api'
import Child from '@/components/Child.vue'
export default {
  components: { Child },
  // components: {
  //   Child: () => '@/components/Child.vue',
  //   Greeting: () => '@/components/Greeting.vue'
  // },
  setup () {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()

    const count = store.state.counter.counter
    const coy = computed(() => route.value.query.coy)

    const movePage = () => {
      router.push('/')
    }

    return { coy, count, movePage }
  }
}
</script>
