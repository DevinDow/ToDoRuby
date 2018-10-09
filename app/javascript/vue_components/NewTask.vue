<template>
  <form v-if="creating" class="task" @submit.prevent="$emit('create', task); creating=false" @keydown.esc="creating=false">
    <input class="done" type="checkbox" v-model="task.done" />
    <input class="priority" type="number" v-model="task.priority" />
    <input class="name" ref="name" v-model="task.name" autofocus />
    <button type="submit">Create</button>
    <button type="button" @click="creating=false">Cancel</button>
  </form>
  <div v-else class="task">
    <button @click="startCreating">New Task</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      creating: false,
      task: {}
    }
  },

  methods: {
    startCreating() {
      this.creating=true
      this.task = {priority: 1}
      this.$nextTick(() => this.$refs.name.focus())
    }
  }
}
</script>

<style scoped>
</style>
