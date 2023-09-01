import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import VueFullpage from 'vue-fullpage.js';
import 'fullpage.js/dist/fullpage.min.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'lib-flexible'
import i18n from './locals'
const app = createApp(App)
app.use(router)
app.use(VueFullpage);
app.use(i18n)
app.use(ElementPlus)
app.mount('#app')
