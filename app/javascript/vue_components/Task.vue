<template>
  <form v-if="editing" v-bind="attrs" @submit.prevent="$emit('update', task); editing=false" @keydown.esc="editing=false">
    <input class="done" type="checkbox" v-model="task.done" />
    <input class="priority" type="number" v-model="task.priority" />
    <input class="name" v-model="task.name" />
    <button type="submit">Submit</button>
    <button type="button" v-on:click="editing=false">Cancel</button>
    <button v-on:click="$emit('delete', task)" data-confirm="Are you sure?">Delete</button>
  </form>
  <div v-else v-bind="attrs">
    <input class="done" type="checkbox" v-model="task.done" v-on:click="$emit('submit', task)" />
    <span class="priority">{{ task.priority }}</span>
    <span class="name">{{ task.name }}</span>
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
  },

  computed: {
    attrs: function() {
      return this.$props.task.done ? { class: "task completed" } : { class: "task" }
    }
  }
}
</script>

<style scoped>
</style>
