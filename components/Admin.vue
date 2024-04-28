<template>
  <div>
    <div v-if="isAdmin">
      Admin Privileges
    </div>
    <div v-else>
      Not Authorized
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>
