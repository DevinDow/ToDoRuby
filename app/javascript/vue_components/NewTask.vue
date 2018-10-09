<template>
  <form v-if="creating" class="task" @submit.prevent="$emit('create', task); cancelCreating()" @keydown.esc="cancelCreating">
    <input class="done" type="checkbox" v-model="task.done" />
    <input class="priority" type="number" v-model="task.priority" />
    <input class="name" ref="name" v-model="task.name" autofocus />
    <button type="submit">Create</button>
    <button type="button" @click="cancelCreating">Cancel</button>
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
      task: {priority: 1}
    }
  },

  methods: {
    startCreating() {
      this.creating=true
      this.$nextTick(() => this.$refs.name.focus())
    },

    cancelCreating() {
      this.creating = false
      this.task = {priority: 1}
    }
  }
}
</script>

<style scoped>
</style>
