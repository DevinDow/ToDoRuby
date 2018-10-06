<template>
  <div class="lists">
    <template v-for="list in lists">
      <List 
        v-bind:list="list"
        v-bind:key="list.id" />
      <hr v-bind:key="'hr-' + list.id" />
    </template>
    <button>New List</button>
  </div>
</template>

<script>
import List from './List.vue'
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
    this.fetchLists()
  },

  methods: {
    fetchLists () {
      console.log("* fetchLists()")
      fetch('/lists.json')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log("fetched " + data.length + " List(s)");
          console.log(data);
          this.lists = data;
          console.log(this)
        });
    }
  }
}
</script>

<style scoped>
</style>
