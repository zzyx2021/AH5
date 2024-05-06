import { createApp } from 'vue'
import 'vant/lib/index.css'
import './assets/css/style.css'
import App from './App.vue'
import store from './store'
import router from './router'
import { Button, NavBar, Tabbar, TabbarItem, Checkbox, showToast, Icon, Dialog, Popup, Swipe, SwipeItem} from 'vant'
import './utils/setRem'

const app = createApp(App)
app.use(Button)
app.use(NavBar)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Checkbox)
app.use(showToast)
app.use(Icon)
app.use(Dialog)
app.use(Popup)
app.use(Swipe)
app.use(SwipeItem)
app.use(store)
app.use(router)
app.mount('#app')
