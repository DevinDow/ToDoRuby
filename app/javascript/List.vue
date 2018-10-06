<template>
  <p>name={{ name }}</p>
</template>

<script>
export default {
  props: ["name"],
  mounted: function () {
    console.log("**LIST MOUNTED**")
    console.log(this)
  }
}
</script>

<style scoped>
</style>
