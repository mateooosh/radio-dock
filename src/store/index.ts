import { createStore } from 'vuex'

export default createStore({
  state: {
    activeStation: {},
    isPlaying: false,
    audio: null
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
    }
  },
  actions: {

  },
  modules: {
  }
})
