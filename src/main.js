import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/styles/common.scss'

import { getCategary } from '@/apis/testAPI'
getCategary()
  .then((res) => {
    console.log('res', res)
  })
  .catch((err) => {
    console.log('err', err)
  })

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
