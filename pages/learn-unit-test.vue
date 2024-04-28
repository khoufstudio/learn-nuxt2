<template>
  <div>
    <p>
      learn unit test
    </p>
    <p>selected: {{ selected }}</p>
    <p class="props">
      props foo: {{ foo }}
    </p>
    <select v-model="selected" name="coy">
      <option value="1">
        input satu
      </option>
      <option value="2">
        input dua
      </option>
      <option value="3">
        input tiga
      </option>
      <option value="4">
        input empat
      </option>
    </select>
    <div v-show="selected == 1 || selected == 2">
      hanya tampil di input 1 dan 2
    </div>
  </div>
</template>
<script>
export default {
  props: {
    foo: {
      type: String,
      default: 'foo'
    }
  },
  data () {
    return {
      selected: 1
    }
  }
}
</script>
