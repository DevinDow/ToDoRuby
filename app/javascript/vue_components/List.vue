<template>
  <div class="list container">
    <h2><a v-bind:href="'/lists/'+list.id">{{ list.name }}</a></h2>
    <Sharees v-bind:list_id=list.id />
    <Task v-for="task in tasks"
      v-bind:task="task"
      v-bind:key="task.id"
      v-on:update="onUpdateTask"
      v-on:delete="onDeleteTask" />
    <NewTask v-on:create="onCreateTask" />
  </div>
</template>

<script>
import Sharees from './Sharees.vue'
import Task from './Task.vue'
import NewTask from './NewTask.vue'
import * as APIs from '../apis.js'
export default {
  components: {
    Sharees,
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
      APIs.createTask(this.$props.list.id, task, this.fetchTasks)
    },

    onUpdateTask(task) {
      console.log("*** onUpdateTask()")
      console.log(task)
      APIs.updateTask(task, this.fetchTasks)
    },

    onDeleteTask(task) {
      console.log("*** onDeleteTask()")
      console.log(task)
      APIs.deleteTask(task.id, this.fetchTasks)
    }
  }
}
</script>

<style scoped>
</style>
