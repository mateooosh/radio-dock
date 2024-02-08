<template>
  <div class="search-bar">
    <div :class="searchBarClasses" ref="searchBar" @animationend="toggleSearchBarAnimation">
      <input v-if="!state.isHidden"
             ref="input"
             class="input"
             type="text"
             v-model="state.query"
             @keydown.enter="searchRadio"
             @blur="hideInput"/>
      <div class="icon" @click="onMagnifyClick">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" size="xl" color="#5E2F83"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">


import { computed, nextTick, reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  queryOnInit: {
    type: String,
    default: ''
  },
  isHiddenOnInit: {
    type: Boolean,
    default: true
  }
})

const state = reactive({
  isHidden: props.isHiddenOnInit,
  animate: false,
  query: props.queryOnInit,
  timeout: null
})

const searchBar = ref<HTMLElement | null>(null)
const input = ref<HTMLElement | null>(null)

const hideInput = () => {
  state.timeout = setTimeout(() => {
    state.isHidden = true
  }, 100)
}

const searchRadio = () => {
  router.push(`/radio-dock/search/${state.query}`)
}

const onMagnifyClick = () => {
  clearTimeout(state.timeout)

  if (state.isHidden) {
    state.isHidden = false
  } else {
    if (!!state.query) {
      searchRadio()
    } else {
      state.isHidden = true
    }
  }
}

const toggleSearchBarAnimation = () => {
  state.animate = !state.animate
}

const searchBarClasses = computed(() => {
  const classes = []

  if (state.isHidden) {
    classes.push('hidden')
  }

  if (state.animate) {
    classes.push('animate')
  }

  return classes
})

watch(() => state.isHidden, (isHidden) => {
  toggleSearchBarAnimation()

  if (isHidden)
    return

  nextTick(() => {
    input.value?.focus()
  })
})
</script>

<style lang="scss" scoped>
@import '../styles/mixins';

$border-radius: 12px;

@keyframes search-bar-animation {
  0% {
    background: transparent;
  }
  50% {
    background: rgba(94, 47, 131, 0.15);
  }
  100% {
    background: transparent;
  }
}

.search-bar {
  @include flexbox(row, flex-end, center);
  width: 100%;

  > div {
    width: 100%;
    height: 46px;
    position: relative;
    transition: width .5s cubic-bezier(1, .3, .3, 1);
    border: 2px solid #5E2F83;
    border-radius: $border-radius;

    &.animate {
      animation: search-bar-animation .5s ease-in-out;
    }

    &.hidden {
      width: 46px;
    }

    > .input {
      width: 100%;
      height: 100%;
      padding: 0 44px 0 16px;
      outline: none;
      border: none;
      border-radius: $border-radius;
      background: transparent;
      font-size: 20px;
    }

    > .icon {
      @include flexbox(row, center, center);
      position: absolute;
      top: 0;
      right: 0;
      width: 42px;
      height: 42px;
    }
  }
}
</style>
