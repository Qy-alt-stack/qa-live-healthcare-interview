import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import './style.css';
import App from './App.vue';
import router from './router';
import i18n from './i18n';
import { store } from './store';

const app = createApp(App);

app.use(Antd);
app.use(router);
app.use(i18n);

// 从后端 API 加载医生数据后再挂载应用
store.initDoctors().finally(() => {
  app.mount('#app');
});
