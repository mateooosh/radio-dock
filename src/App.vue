<template>
  <router-view/>
  <control-bar/>
</template>

<script setup lang="ts">
import ControlBar from '@/components/ControlBar.vue'
import {onMounted} from 'vue'
import {useStore} from 'vuex'

const store = useStore()

onMounted(() => {
  store.commit('setFavoriteStations', JSON.parse(localStorage.getItem('favorites') || '[]'))
})

</script>

<style lang="scss">
* {
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  min-height: 100vh;
}
</style>
