import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';

import 'reset-css/reset.css';

createApp(App).use(i18n).use(store).use(router)
  .mount('#app');
