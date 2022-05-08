import { createApp } from 'vue'
import App from './App.vue'
import './index.css'


let app = createApp(App)


app.provide("code", process.env.env_variable.CODE)



app.mount('#app')