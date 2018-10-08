<template>
  <div v-if="editable" class="task {this.props.task.done ? 'completed' : ''}">
    <input class="done" type="checkbox" v-model="task.done" v-on:click="handleDone" />
    <input class="priority" type="number" v-model="task.priority" />
    <input class="name" v-model="task.name" />
    <button v-on:click="$emit('submit', task); editable=false">Submit</button>
    <button v-on:click="editable=false">Cancel</button>
    <button>Delete</button>
  </div>
  <div v-else class="task {this.props.task.done ? 'completed' : ''}">
    <input class="done" type="checkbox" v-model="task.done" v-on:click="handleDone" />
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
    handleDone () {
      console.log("handleDone()")
      console.log(this.editable)
      // allow checking Done when not editable to do an update
      if (!this.editable) {
        /*this.props.handleUpdate({
          id: this.props.task.id,
          priority: this.props.task.priority, 
          done: this.done.checked, 
          name: this.props.task.name
        })*/
      }
    },

    handleSubmit () {
      console.log("handleUpdate()")
      console.log(this.editable)
      console.log(this)
    }
  }
}
</script>

<style scoped>
</style>
