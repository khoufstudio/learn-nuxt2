<template>
  <div :class="[showModal ? 'bg-[#3e3e4198]' : 'bg-gray-300', 'min-h-screen flex justify-center items-center']">
    <!-- button -->
    <button class="py-2 px-4 bg-blue-600 text-white rounded-sm text-sm" @click="showModal = !showModal">
      Open Modal
    </button>

    <!-- modal overlay -->
    <transition name="fade">
      <div v-if="showModal" class="absolute inset-0 flex items-center justify-center scale-1" @click="showModal = !showModal">
        <!-- modal -->
        <div class="bg-white p-8 rounded w-[300px]">
          <p class="mb-3 leading-6 text-center text-gray-500">
            Apakah Anda yakin Logout?
          </p>
          <div class="grid grid-cols-2 gap-2">
            <button class="bg-blue-700 text-white p-2 rounded text-sm">
              Ya
            </button>
            <button class="bg-gray-300 text-white p-2 rounded text-sm" @click="showModal = !showModal">
              Tidak
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showModal: false
    }
  }
}
</script>

<style>
.fade-enter {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active {
  transition: all 0.3s ease;
}

.fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-leave-to {
  opacity: 0;
  transform: scale(0)
}
</style>
