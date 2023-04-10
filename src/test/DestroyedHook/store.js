export const destroyHook = {
  state: {
    currentCount: 0
  },
  mutations: {
    plus (state) {
      state.currentCount++
    },
    minus (state) {
      state.currentCount--
    }
  }
}
