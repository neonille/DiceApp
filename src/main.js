import { createApp } from 'vue'
import App from './App.vue'
import './index.css'


let app = createApp(App)


app.provide("code", import.meta.env.CODE)



app.mount('#app')