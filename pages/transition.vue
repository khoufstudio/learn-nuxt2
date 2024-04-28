<template>
  <div class="">
    <h1>Learn Transition</h1>
    <button class="bg-gray-400 p-2" @click="show = !show">
      Toggle
    </button>
    <transition name="fade">
      <div class="flex min-h-screen ">
        <div v-show="show" class="bg-blue-500 w-[200px]">
          hellow
        </div>
        <div>
          content
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  }

}
</script>

<style>
  /* .fade-enter-active {
    transition: all 0.3s ease-in-out;
  } */

  .fade-enter-active, .fade-leave-active {
    /* transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0); */
    transition: all 0.3s ease-in-out;
  }

  .fade-leave, .fade-enter-to {
    /* left: 0; */
    /* opacity: 1; */
  }

  .fade-enter, .fade-leave-to {
    /* opacity: 0; */
    transform: translateX(10px);
  }
</style>
