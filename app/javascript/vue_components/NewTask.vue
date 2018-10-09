<template>
  <form v-if="creating" class="task" @submit.prevent="$emit('create', task); cancelCreating()" @keydown.esc="cancelCreating">
    <input class="done" type="checkbox" v-model="task.done" />
    <input class="priority" type="number" v-model="task.priority" />
    <input class="name" v-model="task.name" />
    <button type="submit">Create</button>
    <button type="button" @click="cancelCreating">Cancel</button>
  </form>
  <div v-else class="task">
    <button @click="creating=true; ">New Task</button>
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
    cancelCreating() {
      this.creating = false
      this.task = {priority: 1}
    }
  }
}
</script>

<style scoped>
</style>
