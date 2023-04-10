import Observe from './observe'
import Full from './Full'

const Plugins = [Observe, Full]
function InstallAllPlg (Vue) {
  Plugins.forEach(plg => Vue.use(plg))
}
export default {
  Observe,
  install: InstallAllPlg
}
