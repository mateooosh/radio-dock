<template>
  <div class="control-bar">
    <van-image v-if="$store.state.activeStation.favicon" fit="cover" round :radius="8" width="40px" height="40px"
               :src="$store.state.activeStation.favicon"/>

    <van-notice-bar class="details" :text="$store.state.activeStation?.name || 'Choose station...'"/>
    <div class="controls">
      <font-awesome-icon icon="fa-solid fa-backward-step" size="xl"/>
      <font-awesome-icon v-if="$store.state.isLoading" icon="fa-solid fa-spinner" size="2xl" class="spin"/>
      <font-awesome-icon v-else-if="$store.state.isPlaying" @click="pauseAudio" icon="fa-solid fa-stop" size="2xl"/>
      <font-awesome-icon v-else @click="playAudio" icon="fa-solid fa-play" size="2xl"/>
      <font-awesome-icon icon="fa-solid fa-forward-step" size="xl"/>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import {useStore} from 'vuex'

export default defineComponent({
  name: 'ControlBar',
  store: useStore,
  mounted() {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.setActionHandler('pause', () => this.pauseAudio())
      navigator.mediaSession.setActionHandler('play', () => this.playAudio())
    }
  },
  methods: {
    pauseAudio() {
      this.$store.commit('setIsPlaying', false)
      this.$store.state.audio?.pause()
    },

    playAudio() {
      this.$store.commit('setIsLoading', true)
      this.$store.state.audio?.play()
          .then(() => this.$store.commit('setIsPlaying', true))
          .finally(() => this.$store.commit('setIsLoading', false))
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../styles/mixins';

.control-bar {
  @include flexbox(row, normal, center, 8px);
  position: fixed;
  bottom: 0;
  left: 0;
  height: 60px;
  width: 100%;
  padding: 0 16px;
  background-color: rgb(40, 40, 40);
  color: rgb(222, 222, 222);

  .details {
    flex: 1;
    padding: 0;
    background-color: rgb(40, 40, 40);
    color: rgb(222, 222, 222);
    font-weight: 600;
    font-size: 16px;
  }

  .controls {
    @include flexbox(row, space-between, center);
    width: 134px;

    svg:active {
      transform: scale(1.3);
      transition: all .2s;
    }

    .spin {
      @include spin;
    }
  }
}
</style>
