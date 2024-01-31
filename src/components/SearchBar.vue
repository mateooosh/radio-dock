<template>
  <div class="search-bar">
    <input class="input" type="text" v-model="query" placeholder="Search..." @keydown.enter="onEnterDown"/>
    <van-icon class="icon" name="search" size="24px"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'SearchBar',
  data() {
    return {
      query: ''
    }
  },
  methods: {
    onEnterDown() {
      this.$router.push(`/radio-dock/search/${this.query}`)
    }
  }
})
</script>

<style lang="scss" scoped>
.search-bar {
  width: 100%;
  position: relative;

  > .input {
    width: 100%;
    padding: 12px 16px 12px 36px;
  }

  > .icon {
    position: absolute;
    top: 50%;
    left: 8px;
    transform: translateY(-50%);
  }
}
</style>
