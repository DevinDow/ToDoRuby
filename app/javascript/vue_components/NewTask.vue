<template>
  <div v-if="creating" class="task {task.done ? 'completed' : ''}">
    <input class="done" type="checkbox" v-model="task.done" />
    <input class="priority" type="number" v-model="task.priority" />
    <input class="name" v-model="task.name" />
    <button v-on:click="$emit('create', task); creating=false">Create</button>
    <button v-on:click="creating=false">Cancel</button>
  </div>
  <div v-else class="task {this.props.task.done ? 'completed' : ''}">
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
  }
}
</script>

<style scoped>
</style>
