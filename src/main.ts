import { createApp } from 'vue'
import App from './App.vue'
import 'tailwindcss/tailwind.css'
import '@utils/base/pxToRem.ts'
import '@assets/style/base.scss'
import 'vant/lib/index.css'
import router from './router'
import i18n from '@assets/language'
import Directives from './directives/text-to-right.ts'

const app = createApp(App)
app.use(router)
app.use(Directives)
app.use(i18n)
app.mount('#app')
