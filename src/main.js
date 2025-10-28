import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css'; 
import { createPinia } from 'pinia'   // <-- Import Pinia
const app = createApp(App);

app.use(router);
app.use(createPinia())

app.mount('#app');