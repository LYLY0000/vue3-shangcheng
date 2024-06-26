//引入初始化样式文件
import '@/styles/common.scss'
//引入懒加载指令插件并且注册
import { lazyPlugin } from './directives'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
//引入全局组件插件
import { componentPlugin } from '@/components'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(componentPlugin)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.mount('#app')
//定义全局指令

