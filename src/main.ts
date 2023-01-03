import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { Button, List, Cell, Image as VanImage } from 'vant'
import 'vant/lib/index.css'

createApp(App)
  .use(store)
  .use(router)
  .use(Button)
  .use(List)
  .use(Cell)
  .use(VanImage)
  .mount('#app')
