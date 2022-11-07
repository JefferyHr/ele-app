/**
 * main.js 是整个项目的入口文件
 * 也是webpack的入口文件
 */
import "./assets/scss/comm.scss"
import router from './router';
import { createApp } from 'vue';
import App from "./App";
import PageView from "./components/PageView.vue";
import TitleBar from "./components/TitleBar.vue";
import "./assets/css/index.css";
import "vant/lib/index.css"

const app = createApp(App)

/**
 * 
 */
app.component("page-view", PageView)
app.component("title-bar", TitleBar)
app.use(router)
app.mount("#app")