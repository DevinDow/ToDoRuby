<template>
  <form v-if="editing" class="task" @submit.prevent="$emit('update', task_edit); editing=false" @keydown.esc="editing=false">
    <input class="done" type="checkbox" v-model="task_edit.done" />
    <input class="priority" type="number" v-model="task_edit.priority" />
    <input class="name" ref="name" v-model="task_edit.name" />
    <button type="submit">Submit</button>
    <button type="button" @click="editing=false">Cancel</button>
    <button type="button" @click="$emit('delete', task_edit)" data-confirm="Are you sure?">Delete</button>
  </form>
  <div v-else v-bind="attrs">
    <input class="done" type="checkbox" v-model="task.done" @click="$emit('update', { id: task.id, done: !task.done})" />
    <span class="priority" @click="startEditing">{{ task.priority }}</span>
    <span class="name" @click="startEditing">{{ task.name }}</span>
    <button @click="$emit('delete', task)">X</button>
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
    startEditing() {
      this.task_edit = JSON.parse(JSON.stringify(this.$props.task)) // copy props.task to task_edit so we can cancel without modifying props.task
      this.editing=true;
      this.$nextTick(() => this.$refs.name.focus())
    }
  }
}
</script>

<style scoped>
</style>
