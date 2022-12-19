import Vue from 'vue'
import Vuex from 'vuex'
import * as products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  // },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    products
  }
})
