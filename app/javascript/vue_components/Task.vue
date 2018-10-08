<template>
  <div v-if="editing" class="task {this.props.task.done ? 'completed' : ''}">
    <input class="done" type="checkbox" v-model="task.done" />
    <input class="priority" type="number" v-model="task.priority" />
    <input class="name" v-model="task.name" />
    <button v-on:click="$emit('update', task); editing=false">Submit</button>
    <button v-on:click="editing=false">Cancel</button>
    <button v-on:click="$emit('delete', task)" data-confirm="Are you sure?">Delete</button>
  </div>
  <div v-else class="task {this.props.task.done ? 'completed' : ''}">
    <input class="done" type="checkbox" v-model="task.done" v-on:click="$emit('submit', task)" />
    <span class="priority">{{this.$props.task.priority}}</span>
    <span class="name">{{this.$props.task.name}}</span>
    <button v-on:click="editing=true">Edit</button>
    <button v-on:click="$emit('delete', task)" data-confirm="Are you sure?">Delete</button>
  </div>
</template>

<script>
export default {
  props: [
    "task"
  ],

  data: function () {
    return {
      editing: false
    }
  }
}
</script>

<style scoped>
</style>
