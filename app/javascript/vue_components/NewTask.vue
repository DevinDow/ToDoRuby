<template>
  <form v-if="creating" v-bind="attrs" @submit.prevent="$emit('create', task); creating=false">
    <input class="done" type="checkbox" v-model="task.done" />
    <input class="priority" type="number" v-model="task.priority" />
    <input class="name" v-model="task.name" />
    <button type="submit">Create</button>
    <button v-on:click="creating=false">Cancel</button>
  </form>
  <div v-else v-bind="attrs">
    <button v-on:click="creating=true">New Task</button>
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

  computed: {
    attrs: function() {
      return this.task.done ? { class: "task completed" } : { class: "task" }
    }
  }
}
</script>

<style scoped>
</style>
