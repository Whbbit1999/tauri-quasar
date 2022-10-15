import { App } from 'vue';
import { setupQuasar } from './quasar';

export function setupPlugin(app: App) {
  setupQuasar(app);
}
