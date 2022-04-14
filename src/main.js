import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-purple/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
const app = createApp(App);
app.use(PrimeVue).use(VueAxios, axios);
app.config.globalProperties.api = "https://api.github.com/";
app.mount('#app');
