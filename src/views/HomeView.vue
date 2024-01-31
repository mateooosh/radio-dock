<template>
  <data-load-status :is-loading="isLoading" :has-data="hasData" :has-error="hasError">
    <div class="radio">
      <SearchBar/>
      <button class="radio-random-station" @click="playRandomStation">Play random station</button>
      <div class="stations-section">
        <div class="stations-title">
          <span>Favorites</span>
          <font-awesome-icon icon="fa-solid fa-heart" size="l"/>
        </div>
        <data-load-status :has-data="hasFavoriteStations">
          <div class="stations-column">
            <RadioStation v-for="(station, i) in $store.state.favoriteStations" :key="i" :station="station"/>
          </div>
        </data-load-status>
      </div>

      <div class="stations-section">
        <div class="stations-title">
          <span>Popular</span>
          <font-awesome-icon icon="fa-solid fa-fire" size="l"/>
          <span class="stations-title-see-all" @click="seeAll">See all</span>
        </div>
        <div class="stations-column">
          <RadioStation v-for="(station, i) in mostVotedStations" :key="i" :station="station"/>
        </div>
      </div>
    </div>

  </data-load-status>
</template>

<script>
import {defineComponent} from 'vue'
import SearchBar from '@/components/SearchBar'
import RadioStation from '@/components/RadioStation'
import DataLoadStatus from '@/components/DataLoadStatus'
import {useStore} from 'vuex'
import _ from 'lodash'

const RadioBrowser = require('radio-browser')

export default defineComponent({
  name: 'HomeView',
  components: {DataLoadStatus, SearchBar, RadioStation},
  store: useStore,
  data() {
    return {
      isLoading: true,
      hasData: false,
      hasError: false,
      query: '',
      mostVotedStations: []
    }
  },
  methods: {
    playRandomStation() {
      this.$store.commit('setIsPlaying', false)
      this.$store.state.audio?.pause()
      const randomStation = _.sample(this.mostVotedStations)
      this.$store.commit('setActiveStation', randomStation)
      this.$store.commit('setAudio', new Audio(randomStation.url_resolved))
      this.$store.state.audio?.play().then(() => {
        this.$store.commit('setIsPlaying', true)
      })
    },

    async getMostVotedStations() {
      this.mostVotedStations = await RadioBrowser.getStations({by: 'topvote', limit: 10})
      this.isLoading = false
      this.hasData = true
    },

    seeAll() {
      alert('Not implemented yet ;)')
    }
  },
  mounted() {
    try {
      this.getMostVotedStations()
    } catch {
      this.hasError = true
    }
  },
  computed: {
    hasFavoriteStations() {
      return !_.isEmpty(this.$store.state.favoriteStations)
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../styles/mixins';

.radio {
  @include flexbox(column, normal, normal, 16px);
  min-height: 100vh;
  width: 100%;
  //to remove
  padding-bottom: 60px;

  .stations-section:last-of-type {
    padding-bottom: 20px;
  }

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
    @include flexbox(row, normal, normal, 8px);
    text-align: left;
    padding: 8px 16px;
    font-weight: 600;
    font-size: 18px;

    &-see-all {
      flex-grow: 1;
      text-align: right;
      font-weight: 400;
      color: #737373;
    }
  }

  .stations-column {
    @include flexbox(column, normal, normal, 16px);
    padding: 0 16px;
    width: 100%;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}

</style>