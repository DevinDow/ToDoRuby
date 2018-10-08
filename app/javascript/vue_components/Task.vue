<template>
  <div v-if="editable" class="task {this.props.task.done ? 'completed' : ''}">
    <input class="done" type="checkbox" v-model="task.done" />
    <input class="priority" type="number" v-model="task.priority" />
    <input class="name" v-model="task.name" />
    <button v-on:click="$emit('submit', task); editable=false">Submit</button>
    <button v-on:click="editable=false">Cancel</button>
    <button>Delete</button>
  </div>
  <div v-else class="task {this.props.task.done ? 'completed' : ''}">
    <input class="done" type="checkbox" v-model="task.done" v-on:click="$emit('submit', task)" />
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
  },

  methods: {
    toggleEdit() {
      this.editable = !this.editable;
    },
  }
}
</script>

<style scoped>
</style>
