import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "aos/dist/aos.css";
import "@/assets/styles/all.scss";
import "bootstrap";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const app = createApp(App);
app.use(router);
app.mount("#app");
