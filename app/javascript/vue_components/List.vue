<template>
  <div class="list container">
    <h2><a v-bind:href="'/lists/'+list.id">{{ list.name }}</a></h2>
    <Task v-for="task in tasks"
      v-bind:task="task"
      v-bind:key="task.id"
      v-on:update="onUpdateTask" />
    <NewTask v-on:create="onCreateTask" />
  </div>
</template>

<script>
import Task from './Task.vue'
import NewTask from './NewTask.vue'
import * as APIs from '../apis.js'
export default {
  components: {
    Task,
    NewTask
  },

  props: ["list"],

  data: function () {
    return {
      tasks: []
    }
  },

  mounted: function () {
    console.log("**LIST MOUNTED**")
    console.log(this)
    this.fetchTasks()
  },

  methods: {
    fetchTasks() {
      APIs.fetchTasks(this.$props.list.id, this.setTasks)
    },

    setTasks(tasks) {
      this.tasks = tasks
    },

    onCreateTask(task) {
      console.log("*** onCreateTask()")
      console.log(task)
      APIs.createTask(this.$props.list.id, task, this.fetchTasks())
    },

    onUpdateTask(task) {
      console.log("*** onUpdateTask()")
      console.log(task)
      APIs.updateTask(task, this.fetchTasks())
    }
  }
}
</script>

<style scoped>
</style>
