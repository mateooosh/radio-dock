<template>
  <data-load-status :is-loading="isLoading" :has-data="hasData" :has-error="hasError">
    <div class="radio">
      <SearchBar/>
      <button class="radio-random-station" @click="playRandomStation">Play random station</button>
      <div v-if="hasActiveStation">
        <van-image width="100px" height="100px" fit="cover" :src="activeStation.favicon"/>
        <div>
          Name: {{ activeStation.name }}
        </div>
      </div>
      <div class="stations-section">
        <div class="stations-title">
          <span>Popular</span>
          <font-awesome-icon icon="fa-solid fa-fire" size="l"/>
          <span class="stations-title-see-all" @click="seeAll">See all</span>
        </div>
        <div class="stations-column">
          <RadioStation v-for="(station, i) in mostVotedStations" :key="i" :station="station"
                        @play="onRadioStationPlayClick"/>
        </div>
      </div>

      <div class="stations-section">
        <div class="stations-title">
          <span>Favorites</span>
          <font-awesome-icon icon="fa-solid fa-heart" size="l"/>
        </div>
        <div class="stations-column">
          <RadioStation v-for="(station, i) in favoriteStations" :key="i" :station="station"
                        @play="onRadioStationPlayClick"/>
        </div>
      </div>

      <!--      control bar-->
      <div class="control-bar">
        <van-notice-bar class="details" :text="activeStation?.name || 'Choose station...'"/>
        <div class="controls">
          <font-awesome-icon icon="fa-solid fa-backward-step" size="2xl"/>
          <font-awesome-icon v-if="isPlaying" @click="stopAudio" icon="fa-solid fa-stop" size="2xl"/>
          <font-awesome-icon v-else @click="resumeAudio" icon="fa-solid fa-play" size="2xl"/>
          <font-awesome-icon icon="fa-solid fa-forward-step" size="2xl"/>
        </div>
      </div>
    </div>
  </data-load-status>
</template>

<script>
import {defineComponent} from 'vue'
import {RadioBrowserApi, StationSearchType} from 'radio-browser-api'
import SearchBar from '@/components/SearchBar'
import RadioStation from '@/components/RadioStation'
import DataLoadStatus from '@/components/DataLoadStatus'

const _ = require('lodash')

export default defineComponent({
  name: 'HomeView',
  components: {DataLoadStatus, SearchBar, RadioStation},
  data() {
    return {
      isLoading: true,
      hasData: false,
      hasError: false,
      isPlaying: false,
      query: '',
      audio: null,
      stations: [],
      activeStation: null,
      mostVotedStations: [],
      favoriteStations: []
    }
  },
  methods: {
    async getStations() {
      const api = new RadioBrowserApi('My Radio App')
      this.stations = await api.getStationsBy(StationSearchType.byName, 'Open FM')
      this.isLoading = false
      this.hasData = true
    },

    playRandomStation() {
      this.audio?.pause()
      this.activeStation = _.sample(this.stations)
      this.audio = new Audio(this.activeStation.urlResolved)
      this.audio.play()
      this.isPlaying = true
    },

    playStation(urlResolved) {
      if (!urlResolved)
        return

      this.audio?.pause()
      this.audio = new Audio(urlResolved)
      this.audio.play()
      this.isPlaying = true
    },

    stopAudio() {
      this.audio?.pause()
      this.isPlaying = false
    },

    resumeAudio() {
      this.audio?.play()
      this.isPlaying = true
    },

    async getMostVotedStations() {
      const api = new RadioBrowserApi('My Radio App')
      this.mostVotedStations = await api.getStationsByVotes(20)
      console.log(this.mostVotedStations)
    },

    onRadioStationPlayClick(radioStation) {
      this.activeStation = radioStation
      this.playStation(radioStation.urlResolved)
    },

    seeAll () {
      alert('Not implemented yet ;)')
    }
  },
  mounted() {
    this.getStations()
    this.getMostVotedStations()
    this.favoriteStations = JSON.parse(localStorage.getItem('favorites') || [])
    console.log(this.favoriteStations)
  },
  computed: {
    hasActiveStation() {
      return !!this.activeStation
    }
  }
})
</script>

<style lang="scss" scoped>
.radio {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  //to remove
  padding-bottom: 60px;

  &-random-station {
    margin: 16px;
    background-color: #5E2F83;
    outline: none;
    border: none;
    color: white;
    border-radius: 8px;
    font-weight: 600;
    padding: 16px;
  }

  .stations-title {
    text-align: left;
    padding: 8px 16px;
    font-weight: 600;
    font-size: 18px;
    display: flex;
    gap: 8px;

    &-see-all {
      flex-grow: 1;
      text-align: right;
      font-weight: 400;
      color: #737373;
    }
  }

  .stations-column {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 16px;
    width: 100%;


    &::-webkit-scrollbar {
      display: none;
    }
  }

  .control-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 60px;
    width: 100%;
    padding: 0 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: rgb(40, 40, 40);
    color: rgb(222, 222, 222);

    .details {
      flex: 1;
      padding: 0;
      background-color: rgb(40, 40, 40);
      color: rgb(222, 222, 222);
    }

    .controls {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 48px;
      flex: 1;
    }
  }
}

</style>