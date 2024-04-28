<template>
  <div class="p-8">
    <ul class="h-44 overflow-y-auto bg-blue-500 p-4">
      <transition-group enter-class="opacity-0 translate-y-3">
        <li v-for="(list, index) in lists" :key="index" class="transition-all">
          {{ list }}
        </li>
      </transition-group>
    </ul>
    <form @submit.prevent="addTodo">
      <input v-model="input" placeholder="add" />
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists: ["aa", "bb", "cc"],
      input: "",
    }
  },
  methods: {
    addTodo() {
      this.lists.push(this.input)
      this.input = ""
    },
  },
}
</script>
