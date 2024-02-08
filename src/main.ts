import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { Button, Cell, Icon, Image as VanImage, List, Loading, NoticeBar, Notify, Search } from 'vant'
import 'vant/lib/index.css'

// @ts-ignore
import { library } from '@fortawesome/fontawesome-svg-core'

// @ts-ignore
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// @ts-ignore
import {
  faBackwardStep,
  faFire,
  faForwardStep,
  faHeart,
  faMagnifyingGlass,
  faPlay,
  faRadio,
  faSpinner,
  faStop,
  faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons'

library.add(faPlay, faStop, faForwardStep, faBackwardStep, faFire, faHeart, faRadio, faTriangleExclamation, faSpinner, faMagnifyingGlass)
// https://fontawesome.com/docs/web/use-with/vue/style
// https://fontawesome.com/search?q=step&o=r&m=free

createApp(App)
  .use(store)
  .use(router)
  .use(Button)
  .use(List)
  .use(Cell)
  .use(VanImage)
  .use(Search)
  .use(Icon)
  .use(NoticeBar)
  .use(Loading)
  .use(Notify)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
