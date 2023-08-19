<template>
  <div class="control-bar">
    <van-notice-bar class="details" :text="$store.state.activeStation?.name || 'Choose station...'"/>
    <div class="controls">
      <font-awesome-icon icon="fa-solid fa-backward-step" size="2xl"/>
      <font-awesome-icon v-if="$store.state.isPlaying" @click="stopAudio" icon="fa-solid fa-stop" size="2xl"/>
      <font-awesome-icon v-else @click="resumeAudio" icon="fa-solid fa-play" size="2xl"/>
      <font-awesome-icon icon="fa-solid fa-forward-step" size="2xl"/>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import {createStore} from 'vuex'

export default defineComponent({
  name: 'ControlBar',
  store: createStore,
  methods: {
    stopAudio() {
      this.$store.commit('setIsPlaying', false)
      this.$store.state.audio?.pause()
    },

    resumeAudio() {
      this.$store.state.audio?.play()
      this.$store.commit('setIsPlaying', true)
    },
  },

  computed: {
  }
})
</script>

<style lang="scss" scoped>
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
</style>
