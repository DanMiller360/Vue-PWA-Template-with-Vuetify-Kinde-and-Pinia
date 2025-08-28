// Plugins
import vuetify from './plugins/vuetify'
import { createPinia } from 'pinia'
import { registerSW } from 'virtual:pwa-register'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Styles
import 'unfonts.css'
import router from '@/router'

const updateSW = registerSW({
  onNeedRefresh() {
    console.log('New content available; ask user to refresh.')
  },
  onOfflineReady() {
    console.log('App ready to work offline.')
  },
})

const pinia = createPinia();
const app = createApp(App)

app.use(vuetify)
app.use(pinia)
app.use(router)
app.mount('#app')
