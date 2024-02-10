import { createStore } from 'vuex'
import _ from 'lodash'

export default createStore({
  state: {
    activeStation: {},
    isPlaying: false,
    isLoading: false,
    audio: new Audio(),
    favoriteStations: new Array([])
  },
  getters: {},
  mutations: {
    setActiveStation(state, payload) {
      state.activeStation = payload
      localStorage.setItem('activeStation', JSON.stringify(state.activeStation))
    },
    setIsPlaying(state, payload) {
      state.isPlaying = payload
    },
    setIsLoading(state, payload) {
      state.isLoading = payload
    },
    setAudio(state, payload) {
      state.audio = payload
    },
    setFavoriteStations(state, payload) {
      state.favoriteStations = payload
    },
    addStationToFavorites(state, payload) {
      state.favoriteStations.push(payload)
      localStorage.setItem('favorites', JSON.stringify(state.favoriteStations))
    },
    removeFromFavorites(state, payload) {
      state.favoriteStations = _.filter(state.favoriteStations, (station: any) => station.stationuuid !== payload)
      localStorage.setItem('favorites', JSON.stringify(state.favoriteStations))
    }
  },
  actions: {
    play({ state }) {
      state.audio?.play()
        .then(() => this.commit('setIsPlaying', true))
        .finally(() => this.commit('setIsLoading', false))

      state.audio?.addEventListener('error', () => {
        setTimeout(() => {
          this.dispatch('play')
        }, 1000)
      })
    },

    pause({ state }) {
      state.audio?.pause()
    }
  },
  modules: {}
})
