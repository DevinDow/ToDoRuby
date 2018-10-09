<template>
  <form v-if="editing" class="task" @submit.prevent="$emit('update', task_edit); editing=false" @keydown.esc="editing=false">
    <input class="done" type="checkbox" v-model="task_edit.done" />
    <input class="priority" type="number" v-model="task_edit.priority" />
    <input class="name" v-model="task_edit.name" />
    <button type="submit">Submit</button>
    <button type="button" v-on:click="editing=false">Cancel</button>
    <button type="button" v-on:click="$emit('delete', task_edit)" data-confirm="Are you sure?">Delete</button>
  </form>
  <div v-else v-bind="attrs">
    <input class="done" type="checkbox" v-model="task.done" v-on:click="$emit('submit', task)" />
    <span class="priority">{{ task.priority }}</span>
    <span class="name">{{ task.name }}</span>
    <button v-on:click="edit">Edit</button>
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
      editing: false,
      task_edit: {}
    }
  },

  computed: {
    attrs: function() {
      return this.$props.task.done ? { class: "task completed" } : { class: "task" }
    }
  },

  methods: {
    edit() {
      this.task_edit = JSON.parse(JSON.stringify(this.$props.task)) // copy props.task to task_edit so we can cancel without modifying props.task
      this.editing=true;
    }
  }
}
</script>

<style scoped>
</style>
