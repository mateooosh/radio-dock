<template>
  <div class="radio-station">
    <div class="radio-station-image">
      <van-image v-if="hasFavicon" fit="cover" round :radius="16" width="100px" height="100px" :src="station.favicon"/>
      <font-awesome-icon v-else icon="fa-solid fa-radio" size="4x" style="color: #5E2F83;"/>
    </div>

    <div class="radio-station-details">
      <div class="radio-station-name">{{ station.name }}</div>
      <div class="radio-station-tags">
        <Tag v-for="tag in tagsArray" :key="tag" :content="tag"/>
      </div>
      <div class="radio-station-actions">
        <button @click="togglePlayer" :class="{ inactive: isCurrentlyLoadingOrPlaying }">
          <font-awesome-icon :icon="mainButtonIconName"
                             :class="{ spin: isCurrentlyLoading }"/>
          <span>{{ playerLabel }}</span>
        </button>


        <button :class="{ inactive: isFavorite }">
          <font-awesome-icon icon="fa-solid fa-fire"/>
          <span @click="toggleObservation">{{ observationLabel }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import Tag from '@/components/Tag.vue'
import {useStore} from 'vuex'
import _ from 'lodash'
import {showNotify} from 'vant'
import logger from "@fortawesome/vue-fontawesome/src/logger";

export default defineComponent({
  name: 'RadioStation',
  store: useStore,
  components: {
    Tag
  },
  props: {
    station: {}
  },
  methods: {
    togglePlayer() {
      if (!this.isCurrentlyLoading) {
        if (this.isCurrentlyPlaying)
          this.pauseStation()
        else
          this.playStation()
      }
    },

    toggleObservation() {
      if (this.isFavorite) {
        this.removeFromFavorites()
      } else {
        this.addToFavorites()
      }
    },

    playStation() {
      this.$store.commit('setIsPlaying', false)
      this.$store.dispatch('pause')
      this.$store.commit('setActiveStation', this.station)
      this.$store.commit('setAudio', new Audio(this.station.url_resolved))
      this.$store.commit('setIsLoading', true)
      this.$store.dispatch('play')
    },

    pauseStation() {
      this.$store.commit('setIsPlaying', false)
      this.$store.dispatch('pause')
    },

    addToFavorites() {
      this.$store.commit('addStationToFavorites', this.station)
      showNotify({type: 'success', message: `${this.station.name} added to favorites`})
    },

    removeFromFavorites() {
      this.$store.commit('removeFromFavorites', this.station.stationuuid)
      showNotify({type: 'warning', message: `${this.station.name} removed from favorites`})
    }
  },

  computed: {
    hasFavicon() {
      return this.station.favicon
    },
    tagsArray() {
      return _.filter(_.split(this.station.tags, ','), (tag) => !_.isEmpty(tag))
    },
    isCurrentlyLoading() {
      return this.$store.state.isLoading && this.$store.state.activeStation.stationuuid === this.station.stationuuid
    },
    isCurrentlyPlaying() {
      return this.$store.state.isPlaying && this.$store.state.activeStation.stationuuid === this.station.stationuuid
    },
    isCurrentlyLoadingOrPlaying() {
      return this.isCurrentlyLoading || this.isCurrentlyPlaying
    },
    isFavorite() {
      return _.some(this.$store.state.favoriteStations, ['stationuuid', this.station.stationuuid])
    },
    playerLabel() {
      if (this.isCurrentlyLoading)
        return 'Loading'
      else if (this.isCurrentlyPlaying)
        return 'Pause'
      else
        return 'Play'
    },
    mainButtonIconName() {
      if (this.isCurrentlyLoading)
        return 'fa-solid fa-spinner'
      else if (this.isCurrentlyPlaying)
        return 'fa-solid fa-stop'
      else
        return 'fa-solid fa-play'
    },
    observationLabel() {
      return this.isFavorite ? 'Unobserve' : 'Observe'
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../styles/mixins';

.radio-station {
  @include flexbox(row, normal, normal, 16px);
  height: 100px;

  &-image {
    @include flexbox(row, center, center);

    flex-shrink: 0;
    width: 100px;
    height: 100px;
    border-radius: 16px;
    box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  }

  &-details {
    @include flexbox(column, normal, normal);
    flex-grow: 1;
    padding: 4px 0;
    justify-content: space-between;
    overflow: hidden;
  }

  &-name {
    font-weight: 600;
  }

  &-tags {
    @include flexbox(row, flex-start, normal, 4px);
    overflow-x: auto;
    overflow-y: hidden;
    //hide scrollbar
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  &-actions {
    @include flexbox(row, normal, normal, 8px);

    .spin {
      @include spin;
    }

    > button {
      @include flexbox(row, center, center, 8px);
      width: 50%;
      height: 30px;
      background-color: #5E2F83;
      outline: none;
      border: 2px solid #5E2F83;
      color: white;
      border-radius: 8px;
      font-weight: 600;
      font-size: 13px;
      transition: background-color .4s;

      &.inactive {
        background-color: transparent;
        color: #5E2F83;
      }
    }
  }
}
</style>
