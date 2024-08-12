import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import axios from 'axios';
import router from './router/index';
import store from './store/index';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = ""

const app = createApp(App);
app.use(store);
app.use(router).mount('#app');




