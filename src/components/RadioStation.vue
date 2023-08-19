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
        <button v-if="isCurrentlyPlaying" @click="pauseStation"
                class="inactive">
          <font-awesome-icon icon="fa-solid fa-stop"/>
          <span>Pause</span>
        </button>
        <button v-else @click="playStation">
          <font-awesome-icon icon="fa-solid fa-play"/>
          <span>Play</span>
        </button>

        <button v-if="isFavorite" class="inactive">
          <font-awesome-icon icon="fa-solid fa-fire"/>
          <span @click="removeFromFavorites">Unobserve</span>
        </button>
        <button v-else>
          <font-awesome-icon icon="fa-solid fa-fire"/>
          <span @click="addToFavorites">Observe</span>
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
    playStation() {
      this.$store.commit('setIsPlaying', false)
      this.$store.state.audio?.pause()
      this.$store.commit('setActiveStation', this.station)
      this.$store.commit('setAudio', new Audio(this.station.url_resolved))
      this.$store.state.audio?.play().then(() => {
        this.$store.commit('setIsPlaying', true)
      })
    },

    pauseStation() {
      this.$store.commit('setIsPlaying', false)
      this.$store.state.audio?.pause()
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
    isCurrentlyPlaying() {
      return this.$store.state.isPlaying && this.$store.state.activeStation === this.station
    },
    isFavorite() {
      return _.some(this.$store.state.favoriteStations, ['stationuuid', this.station.stationuuid])
    }
  }
})
</script>

<style lang="scss" scoped>
.radio-station {
  height: 100px;
  display: flex;
  flex-direction: row;
  gap: 16px;

  &-image {
    flex-shrink: 0;
    width: 100px;
    height: 100px;
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  }

  &-details {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 4px 0;
    justify-content: space-between;
    overflow: hidden;
  }

  &-name {
    font-weight: 600;
  }

  &-tags {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 4px;
    overflow-x: auto;
    overflow-y: hidden;
    //hide scrollbar
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  &-actions {
    display: flex;
    flex-direction: row;
    gap: 8px;

    > button {
      width: 50%;
      height: 30px;
      background-color: #5E2F83;
      outline: none;
      border: none;
      color: white;
      border-radius: 8px;
      font-weight: 600;
      font-size: 13px;
      display: flex;
      flex-direction: row;
      gap: 8px;
      justify-content: center;
      align-items: center;

      &.inactive {
        background-color: transparent;
        border: 2px solid #5E2F83;
        color: #5E2F83;
        //background-color: lighten(#5E2F83, 16);
      }
    }
  }
}
</style>
