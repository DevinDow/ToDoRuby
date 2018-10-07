<template>
  <div v-if="editable" class="task {this.props.task.done ? 'completed' : ''}">
    <input class="done" type="checkbox" v-model="this.$props.task.done" />
    <input class="priority" v-model="this.$props.task.priority" />
    <input class="name" v-model="this.$props.task.name" />
    <button>Submit</button>
    <button v-on:click="editable=false">Cancel</button>
    <button>Delete</button>
  </div>
  <div v-else class="task {this.props.task.done ? 'completed' : ''}">
    <input class="done" type="checkbox" v-model="this.$props.task.done" />
    <span class="priority">{{this.$props.task.priority}}</span>
    <span class="name">{{this.$props.task.name}}</span>
    <button v-on:click="editable=true">Edit</button>
    <button>Delete</button>
  </div>
</template>

<script>
export default {
  props: [
    "task"
  ],

  data: function () {
    return {
      editable: false
    }
  }
}
</script>

<style scoped>
</style>
