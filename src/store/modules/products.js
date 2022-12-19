import axiosApi from "@/config";

export const state = {
  products: [],
  spinner: false,
  products8: [],
};
export const getters = {
  GET_PRODUCTS: (state) => state.products,
  GET_SPINNER: (state) => state.spinner,
  GET_PRODUCTS8: (state) => state.products8,
};
export const mutations = {
  SET_PRODUCTS: (state, data) => (state.products = data),
  SET_PRODUCTS8: (state, data) => (state.products8 = data),
  SET_SPINNER: (state, data) => (state.spinner = data),
};
export const actions = {
  async getProducts({ commit }) {
    try {
      commit("SET_SPINNER", true);
      let response = await axiosApi.get("products?limit=6");
      if (response.status == 200) {
        console.warn(response.data);
        commit("SET_PRODUCTS", response.data);
      }
    } catch (e) {
      console.warn(e.toString());
    } finally {
      commit("SET_SPINNER", false);
    }
  },
  async getProducts8({ commit }) {
    try {
      let response = await axiosApi.get("product?limit=8");
      if (response.status == 200) {
        console.warn(response.data);
        commit("SET_PRODUCTS8", response.data);
      }
    } catch (e) {
      console.warn(e.toString());
    }
  },
};
