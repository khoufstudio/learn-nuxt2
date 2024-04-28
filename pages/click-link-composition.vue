<template>
  <div>
    <button class="bg-blue-400 text-white p-4" @click="downloadLink(null)">
      null link
    </button>
    <button class="bg-blue-400 text-white p-4" @click="downloadLink('https://upload.wikimedia.org/wikipedia/id/1/12/Logo_Persib.png')">
      not null link
    </button>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
export default {
  setup () {
    const linkDownload = ref(false)
    function downloadLink (link) {
      if (link !== null) {
        linkDownload.value = true
        window.open(link)
      } else {
        alert(link)
      }
    }

    return {
      downloadLink,
      linkDownload
    }
  }
}
</script>
