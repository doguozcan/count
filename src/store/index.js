import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0,
    pressed: 0,
  },
  mutations: {
    decrement(state, data = 1) {
      state.counter -= data
      state.pressed += 1
    },
    increment(state, data = 1) {
      state.counter += data
      state.pressed += 1
    },
  },
  actions: {
    decrementRandomly({ commit }) {
      axios(
        'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
      ).then((value) => {
        commit('decrement', value.data)
      })
    },
    incrementRandomly({ commit }) {
      axios(
        'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
      ).then((value) => {
        commit('increment', value.data)
      })
    },
  },
})
