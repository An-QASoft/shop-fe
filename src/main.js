import { registerPlugins } from '@/plugins'
import { createApp } from 'vue'
import App from './App.vue'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import './assets/style.css'

const app = createApp(App)

registerPlugins(app)

app.use(VXETable).mount('#app')
