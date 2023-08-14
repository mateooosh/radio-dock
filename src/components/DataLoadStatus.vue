<template>
  <div class="data-load-status">
    <div v-if="isLoading">Loading</div>
    <div v-else-if="hasError">Error</div>
    <slot v-else-if="hasData"></slot>
    <div v-else>Nothing to display</div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'DataLoadStatus',
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    hasData: {
      type: Boolean,
      default: true
    },
    hasError: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
