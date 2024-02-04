<template>
  <div class="data-load-status">
    <div v-if="isLoading">
      <van-loading type="spinner" color="#5E2F83" size="70px"/>
    </div>
    <div v-else-if="hasError" class="error">
      <font-awesome-icon icon="fa-solid fa-triangle-exclamation" size="3x" style="color: #d50000;"/>
      <div>Something went wrong</div>
    </div>
    <slot v-else-if="hasData"></slot>
    <div v-else class="no-data">
      <font-awesome-icon icon="fa-solid fa-triangle-exclamation" size="3x" style="color: #9d9d9d;"/>
      <div>No data found</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
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
  // showDelayInMs: {
  //   type: Number,
  //   default: 0
  // },
  // hideDelayInMs: {
  //   type: Number,
  //   default: 0
  // }
})

// const setHasData = (hasData: boolean) => {
//   if (hasData) {
//     if (props.showDelayInMs) {
//       setTimeout(() => {
//         state.hasDataWithDelay = true
//       }, props.showDelayInMs)
//     } else {
//       state.hasDataWithDelay = true
//     }
//   } else {
//     if (props.hideDelayInMs) {
//       setTimeout(() => {
//         state.hasDataWithDelay = false
//       }, props.hideDelayInMs)
//     } else {
//       state.hasDataWithDelay = false
//     }
//   }
// }
//
// onMounted(() => {
//   setHasData(props.hasData)
// })
//
// watch(props, (value) => {
//   setHasData(value.hasData)
// })
</script>

<style lang="scss" scoped>
@import '../styles/mixins';

.data-load-status {
  flex: 1;

  @include flexbox(row, center, center);

  .error, .no-data {
    @include flexbox(column, center, center, 8px);
    color: #737373;
  }
}
</style>
