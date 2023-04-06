import Observe from './observe'

const Plugins = [Observe]
function InstallAllPlg (Vue) {
  Plugins.forEach(plg => Vue.use(plg))
}
export default {
  Observe,
  install: InstallAllPlg
}
