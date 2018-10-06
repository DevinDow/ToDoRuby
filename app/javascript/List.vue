<template>
  <p><a v-bind:href="'/lists/' + list.id">{{ list.name }}</a></p>
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
