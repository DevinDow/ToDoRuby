<template>
  <form v-if="creating" class="list" @submit.prevent="$emit('create', list); creating=false" @keydown.esc="creating=false">
    <input class="name" ref="name" v-model="list.name" />
    <button type="submit">Create</button>
    <button type="button" @click="creating=false">Cancel</button>
  </form>
  <div v-else class="list">
    <button @click="startCreating">New List</button>
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
    startCreating() {
      this.creating = true
      this.list = {}
      this.$nextTick(() => this.$refs.name.focus())
    }
  }
}
</script>

<style scoped>
</style>
