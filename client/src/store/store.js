import Vue from 'vue'
import Vuex from 'vuex'

// Tell vue to use vuex, basically it allow you to access your store in all of your vue components
Vue.use(Vuex)

export default new Vuex.Store({
  // You can never modify the state unless it an action or mutation
  strict: true,
  // Global state of
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    }
  }
})
