<template>
  <p>{{ list.name }}</p>
</template>

<script>
export default {
  props: ["list"],
  mounted: function () {
    console.log("**LIST MOUNTED**")
    console.log(this)
  }
}
</script>

<style scoped>
</style>
