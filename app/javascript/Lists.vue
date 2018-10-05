<template>
  <ol>
    <li><List name="List 1" /></li>
    <li><List name="List 2" /></li>
    <li><List name="List 3" /></li>
  </ol>
</template>

<script>
import List from './List.vue'
export default {
  components: {
    List
  },
  mounted: function () {
    console.log("**Lists MOUNTED**")
    console.log(this)
  }
}
</script>

<style scoped>
</style>
