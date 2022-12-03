import { defineNuxtPlugin } from 'nuxt/app';

import axios from 'axios';
export default defineNuxtPlugin((NuxtApp) => {
  NuxtApp.vueApp.config.globalProperties.axios = axios;
});
