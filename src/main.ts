import { createApp } from 'vue';
import App from './App.vue';

import './style.css';
import { setupPlugin } from './plugins';
import router, { setupRouter } from './router';

async function bootstrap(): Promise<void> {
  const app = createApp(App);
  setupPlugin(app);
  setupRouter(app);
  await router.isReady();

  app.mount('#app');
}

bootstrap();
