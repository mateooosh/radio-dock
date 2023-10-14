<template>
  <data-load-status :is-loading="isLoading" :has-data="hasData" :has-error="hasError">
    <div class="radio">
      <div>
        <div class="stations-title">
          <span>Popular</span>
          <font-awesome-icon icon="fa-solid fa-fire"/>
        </div>
        <div class="stations-column">
          <RadioStation v-for="(station, i) in stations" :key="i" :station="station"/>
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
import RadioBrowser from 'radio-browser'

export default defineComponent({
  name: 'SearchView',
  components: {DataLoadStatus, SearchBar, RadioStation},
  data() {
    return {
      stations: [],
      isLoading: true,
      hasData: false,
      hasError: false
    }
  },
  mounted() {
    this.searchStations()
  },
  methods: {
    async searchStations() {
      this.stations = await RadioBrowser.searchStations({name: this.$route.params.query, limit: 20, order: 'votes', reverse: true})
      this.isLoading = false
      this.hasData = true
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
  padding-bottom: 60px;

  .stations-title {
    @include flexbox(row, normal, normal, 8px);
    text-align: left;
    padding: 8px 16px;
    font-weight: 600;
    font-size: 18px;
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