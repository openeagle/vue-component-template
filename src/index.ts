import { App } from 'vue'
import { Demo } from './demo'

const version = '1.0.0'

function install(app: App) {
  const components = [Demo]
  components.forEach((item: any) => {
    if (item.install) {
      app.use(item)
    } else if (item.name) {
      app.component(item.name, item)
    }
  })
}
export * from './demo'

export { install, version }
