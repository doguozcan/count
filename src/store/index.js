import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
  },
  mutations: {
    incrementBy1(state) {
      state.counter += 1
    },
    decrementBy1(state) {
      state.counter -= 1
    },
  },
  actions: {},
})
