import { createStore } from 'vuex'
import _ from 'lodash'

export default createStore({
  state: {
    activeStation: {},
    isPlaying: false,
    audio: null,
    favoriteStations: new Array([])
  },
  getters: {
  },
  mutations: {
    setActiveStation(state, payload) {
      state.activeStation = payload
    },
    setIsPlaying(state, payload) {
      state.isPlaying = payload
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

  },
  modules: {
  }
})
