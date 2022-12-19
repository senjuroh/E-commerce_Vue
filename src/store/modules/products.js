import axiosApi from "@/config"

export const state = {
    products:[]
}
export const getters = {
    GET_PRODUCTS : (state) => state.products
}
export const mutations = {
    SET_PRODUCTS : (state, data) => state.products =data
}
export const actions = {
    async getProducts(commit) {
        try {
            let response = await axiosApi.get("products")
            if (response.status == 200) {
                console.warn(response.data)
                commit('SET_PRODUCTS', response.data)
            }
        } catch (e) {
            console.warn(e.toString())
        }
    }
}