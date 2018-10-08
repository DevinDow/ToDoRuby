<template>
  <div v-if="sharees" class="sharees container">
    SHARED WITH: {{ sharees }}
  </div>
</template>

<script>
import * as APIs from '../apis.js'
export default {
  props: ["list_id"],

  data: function () {
    return {
      sharees: ""
    }
  },

  mounted: function () {
    this.fetchSharees()
  },

  methods: {
    fetchSharees() {
      APIs.fetchSharees(this.$props.list_id, this.setSharees)
    },

    setSharees(sharees) {
      this.sharees = sharees
    }
  }
}
</script>

<style scoped>
</style>
