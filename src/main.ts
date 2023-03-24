import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import "./assets/main.css";

const app = createApp(App);

// Initialize Pinia and install it as a plugin
const pinia = createPinia();
app.use(pinia);

app.mount("#app");
