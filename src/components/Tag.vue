<template>
  <div class="tag">
    {{ content }}
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Tag',
  props: {
    content: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.tag {
  border: 2px solid #5E2F83;
  border-radius: 12px;
  padding: 4px 8px;
  font-size: 13px;
  font-weight: 600;
  text-wrap: nowrap;
}
</style>
