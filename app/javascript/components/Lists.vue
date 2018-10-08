<template>
  <div class="lists">
    <template v-for="list in lists">
      <List v-bind:list="list" v-bind:key="list.id" />
      <hr v-bind:key="'hr-'+list.id" />
    </template>
    <button>New List</button>
  </div>
</template>

<script>
import List from './List.vue'
import * as APIs from '../apis.js'
export default {
  components: {
    List
  },

  data: function () {
    return {
      lists : []
    }
  },

  mounted: function () {
    console.log("**Lists MOUNTED**")
    console.log(this)
    APIs.fetchLists(this.setLists)
  },

  methods: {
    setLists(lists) {
      this.lists = lists
    },
  }
}
</script>

<style scoped>
</style>
