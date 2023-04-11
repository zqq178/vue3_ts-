import { createApp } from 'vue';
import { createPinia } from 'pinia';
// // 1.手动导入需要的组件
// import { Grid, GridItem, Icon } from 'vant';
// import { Image as VanImage } from 'vant';
// 1.2.直接导入所有组件
// import Vant from 'vant';

import App from './App.vue';
import router from './router';

import './assets/main.css';
// // 2.引入组件样式
// import 'vant/lib/index.css'

const app = createApp(App);

app.use(createPinia());
app.use(router);
// // 3.注册需要的组件
// app.use(Grid);
// app.use(GridItem);
// app.use(Icon);
// // app.use(Vant)
// app.use(VanImage);

app.mount('#app')
