<template>
  <form v-if="creating" class="list" @submit.prevent="$emit('create', list); cancelCreating()" @keydown.esc="cancelCreating">
    <input class="name" v-model="list.name" />
    <button type="submit">Create</button>
    <button type="button" v-on:click="cancelCreating">Cancel</button>
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
  }, 

  methods: {
    cancelCreating() {
      this.creating = false
      this.list = {}
    }
  }
}
</script>

<style scoped>
</style>
