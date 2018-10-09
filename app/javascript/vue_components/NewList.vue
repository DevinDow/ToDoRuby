<template>
  <form v-if="creating" class="list" @submit.prevent="$emit('create', list); creating=false; list = {}">
    <input class="name" v-model="list.name" />
    <button type="submit">Create</button>
    <button v-on:click="creating=false">Cancel</button>
  </form>
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
