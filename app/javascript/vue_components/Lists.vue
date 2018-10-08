<template>
  <div class="lists">
    <template v-for="list in lists">
      <List v-bind:list="list" v-bind:key="list.id" />
      <hr v-bind:key="'hr-'+list.id" />
    </template>
    <NewList v-on:create="onCreateList" />
  </div>
</template>

<script>
import List from './List.vue'
import NewList from './NewList.vue'
import * as APIs from '../apis.js'
export default {
  components: {
    List,
    NewList
  },

  data: function () {
    return {
      lists : []
    }
  },

  mounted: function () {
    console.log("**Lists MOUNTED**")
    console.log(this)
    this.fetchLists()
  },

  methods: {
    fetchLists() {
      APIs.fetchLists(this.setLists)
    },

    setLists(lists) {
      this.lists = lists
    },

    onCreateList(list) {
      console.log("*** onCreateList()")
      console.log(list)
      APIs.createList(list, this.fetchLists)
    }
  }
}
</script>

<style scoped>
</style>
