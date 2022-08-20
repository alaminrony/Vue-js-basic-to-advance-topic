import { createApp } from 'vue'
import App from './App.vue'
import {store} from './store/store'


// import Header from './Components/Header_footer/Header'

createApp(App).use(store).mount('#app');


// app.component('compHeader', Header);

