import type { App } from 'vue'
import Xdsh from './Xdsh.vue'

export default {
  install(app: App) {
    app.component('Xdsh', Xdsh)
  }
}
