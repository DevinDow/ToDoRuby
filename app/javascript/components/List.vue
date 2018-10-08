<template>
  <div class="list container">
    <h2><a v-bind:href="'/lists/'+list.id">{{ list.name }}</a></h2>
    <Task v-for="task in tasks" v-bind:task="task" v-bind:key="task.id" v-on:submit="onSubmitTask" />
    <button>New Task</button>
  </div>
</template>

<script>
import Task from './Task.vue'
import * as APIs from '../apis.js'
export default {
  components: {
    Task
  },

  props: ["list"],

  data: function () {
    return {
      tasks : []
    }
  },

  mounted: function () {
    console.log("**LIST MOUNTED**")
    console.log(this)
    this.fetchTasks()
  },

  methods: {
    fetchTasks () {
      console.log("* fetchTasks()")
      fetch('/lists/'+this.$props.list.id+'/tasks.json')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log("fetched " + data.length + " Task(s)")
          console.log(data)
          this.tasks = data
          console.log(this)
        });
    },

    onSubmitTask (task) {
      console.log("*** onSubmitTask()")
      console.log(task)
      APIs.updateTask(task)
      this.fetchTasks()
    }
  }
}
</script>

<style scoped>
</style>
