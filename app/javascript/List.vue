<template>
  <div class="list container">
    <h2><a v-bind:href="'/lists/' + list.id">{{ list.name }}</a></h2>
    <ul>
      <li>task1</li>
      <li>task2</li>
      <li>task3</li>
    </ul>
    <button>New Task</button>
  </div>
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
