<template>
  <div class="home">
    <van-button type="primary" @click="playRandomStation">Play random radio</van-button>
    <div v-if="hasActiveStation">
      <van-image width="100px" height="100px" fit="cover" :src="activeStation.favicon"/>
      <div>
        Name: {{ activeStation.name }}
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import {RadioBrowserApi, StationSearchType, Station} from 'radio-browser-api'

const _ = require('lodash')

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      audio: null,
      stations: [],
      activeStation: null
    }
  },
  methods: {
    async getStations() {
      const api = new RadioBrowserApi('My Radio App')
      this.stations = await api.getStationsBy(StationSearchType.byName, 'Open FM')
    },

    playRandomStation() {
      this.audio?.pause()
      this.activeStation = _.sample(this.stations)
      console.log('playRandomStation', this.activeStation)
      this.audio = new Audio(this.activeStation.urlResolved)
      this.audio.play()
    }
  },
  mounted() {
    this.getStations()
  },
  computed: {
    hasActiveStation() {
      return !!this.activeStation
    }
  }
})
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
}
</style>