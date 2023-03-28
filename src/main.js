import {createApp} from 'vue';
import router from './router/router';
import store from './store';
import App from './App.vue';
import './index.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import './permission' TODO

const app = createApp(App);

app.use(router);
app.use(store);
app.use(ElementPlus)

app.mount('#app');
