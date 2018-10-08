<template>
  <div v-if="creating" class="list">
    <input class="name" v-model="list.name" />
    <button v-on:click="$emit('create', list); creating=false">Create</button>
    <button v-on:click="creating=false">Cancel</button>
  </div>
  <div v-else class="list">
    <button v-on:click="creating=true">New List</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      creating: false,
      list: {}
    }
  }
}
</script>

<style scoped>
</style>
