import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Tabs from 'vue3-tabs';


createApp(App).use(store).use(router).use(Tabs).mount('#app')
