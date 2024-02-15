import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: process.env.VUE_APP_FB_API_KEY,
    authDomain: "auth-vue-16374.firebaseapp.com",
    projectId: "auth-vue-16374",
    storageBucket: "auth-vue-16374.appspot.com",
    messagingSenderId: "347061994620",
    appId: "1:347061994620:web:21ddae290e243d688ff5f9",
    measurementId: "G-1QJXZEGM1F"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(router).mount('#app')
