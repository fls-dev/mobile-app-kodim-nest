import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { IonicVue } from '@ionic/vue'
import axios from "axios";
import VueCookies from 'vue-cookies'
import {keyCookie} from "@/vue.config";
import { Storage } from '@ionic/storage';

import '@ionic/vue/css/core.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { defineCustomElements } from '@ionic/pwa-elements/loader';


  const app = createApp(App)
    .use(IonicVue)
    .use(router);



  app.use(VueCookies);

  axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response) {
      if (error.response.status === 403) {
        $cookies.remove(keyCookie)
        router.push('/')
      }
      return error
    }
  });

  router.isReady().then(() => {
    app.mount('#app');
  });

defineCustomElements(window);