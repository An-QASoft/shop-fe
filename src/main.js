import { registerPlugins } from '@/plugins'
import { createApp } from 'vue'
import App from './App.vue'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import './assets/style.css'
import router from './router'
import '@mdi/font/css/materialdesignicons.css';
import store from './plugins/store';

const app = createApp(App)

registerPlugins(app)
app.use(router)
app.use(store)
app.use(VXETable)
app.mount('#app')
