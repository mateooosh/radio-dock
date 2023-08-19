<template>
  <div class="data-load-status">
    <div v-if="isLoading">
      <van-loading type="spinner" color="#5E2F83" size="70px"/>
    </div>
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
.data-load-status {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
