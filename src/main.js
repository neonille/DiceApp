import { createApp } from 'vue'
import App from './App.vue'
import './index.css'


let app = createApp(App)

let x = await fetch("https://6277979d08221c96846731ce.mockapi.io/api/v1/code");
x = await x.json();
console.log(x)
app.provide("code", x)



app.mount('#app')