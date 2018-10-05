<template>
  <p>{{ message }}</p>
</template>

<script>
export default {
  props: ["message"],
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
