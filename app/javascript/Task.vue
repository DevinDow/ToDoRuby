<template>
  <div class="task {this.props.task.done ? 'completed' : ''}">
    <input class="done" type="checkbox" />
    <span class="priority">{{this.$props.task.priority}}</span>
    <span class="name">{{this.$props.task.name}}</span>
    <button>Edit</button>
    <button>Delete</button>
  </div>
</template>

<script>
export default {
  props: ["task"],

  mounted: function () {
    console.log("**Task MOUNTED**")
    console.log(this)
  }
}
</script>

<style scoped>
</style>
