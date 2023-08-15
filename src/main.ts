import { createApp } from 'vue'
import "./style.css"
import router from './router/router';
import App from './App.vue'
import './samples/node-api'

const app = createApp(App);

app.use(router);

app.mount('#app');

/*createApp(App)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })*/
