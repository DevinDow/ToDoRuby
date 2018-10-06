<template>
  <ul>
    <li v-for="list in lists" :key="list.id">
      <List name="test" />
    </li>
  </ul>
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
</script>

<style scoped>
</style>
