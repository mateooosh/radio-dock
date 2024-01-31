<template>
  <router-view/>
  <control-bar/>
</template>

<script setup lang="ts">
import {onMounted} from 'vue'
import {useStore} from 'vuex'
import ControlBar from '@/components/ControlBar.vue'

const store = useStore()

onMounted(() => {
  store.commit('setFavoriteStations', JSON.parse(localStorage.getItem('favorites') || '[]'))

  const activeStation = JSON.parse(localStorage.getItem('activeStation') || '{}')
  store.commit('setActiveStation', activeStation)
  store.commit('setAudio', new Audio(activeStation?.url_resolved))
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
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}
</style>
