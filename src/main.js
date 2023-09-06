import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import VueFullpage from 'vue-fullpage.js';
import 'fullpage.js/dist/fullpage.min.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'vant/lib/index.css';
import { Picker, Popup, Collapse, CollapseItem } from 'vant';
import 'lib-flexible'
import i18n from './locals'
const isMobile = () => {
    let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    return flag;
};
const app = createApp(App)
app.provide('isMobile', isMobile())
app.use(router)
app.use(VueFullpage);
app.use(i18n)
app.use(ElementPlus)
app.use(Picker)
app.use(Popup)
app.use(Collapse)
app.use(CollapseItem)
app.mount('#app')
