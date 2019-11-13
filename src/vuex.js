import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    headerActive: 1
  },
  mutations: {
    setHeaderActive: function(state, active) {
      state.headerActive = active
    }
  }
})
export default store