import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    products: [],
    cart: {},
    list: {},
    token: null,
    users: null,
    AirT:[],
    HairC:[]
  },
  getters: {
    totalQuantity(state) {
      return Object.values(state.cart).reduce((acc, { quantity }) => acc + quantity, 0)
    },
    totalPrice(state) {
      return Object.values(state.cart).reduce((acc, { quantity, Price }) => acc + quantity * Price, 0)
    }
  },
  mutations: {
    setProduct(state, payload) {
      state.products = payload
    },
    setAirT(state, payload){
      state.AirT = payload
    },
    setHairC(state, payload){
      state.HairC = payload
    },
    setCart(state, payload) {
      state.cart[payload.Id] = payload
    },
    cleartCart(state) {
      state.cart = {}
    },
    increase(state, payload) {
      state.cart[payload].quantity = state.cart[payload].quantity + 1
    },
    reduce(state, payload) {
      state.cart[payload].quantity = state.cart[payload].quantity - 1
      if (state.cart[payload].quantity === 0) {
        delete state.cart[payload]
      }
    },
    setList(state, payload) {
      state.list[payload.Id] = payload
    },
    remove(state, payload) {
      delete state.cart[payload]
    },
    setToken(state, token) {
      state.token = token
    },
    setUser(state, users) {
      state.users = users
    }
  },
  actions: {
    async fetchData({ commit }) {
      try {
        const res = await fetch('http://localhost:5000/api/vacuumcleaners')
        const data = await res.json()
        commit('setProduct', data)
      } catch (error) {
        console.log(error);

      }
    },
    async AirT({ commit }) {
      try {
        const res = await fetch('http://localhost:5000/api/airtreatments')
        const data = await res.json()
        commit('setAirT', data)
      } catch (error) {
console.log(error);
      }
    },
    async HairC({ commit }) {
      try {
        const res = await fetch('http://localhost:5000/api/haircares')
        const data = await res.json()
        commit('setHairC', data)
      } catch (error) {
        console.log(error);

      }
    },
    addToCart({ commit, state }, product) {
      state.cart.hasOwnProperty(product.Id)
        ? product.quantity = state.cart[product.Id].quantity + 1
        : product.quantity = 1
      commit('setCart', product)
    },
    addToCart2({ commit, state }, AirT) {
      state.cart.hasOwnProperty(AirT.Id)
        ? AirT.quantity = state.cart[AirT.Id].quantity + 1
        : AirT.quantity = 1
      commit('setCart', AirT)
    },
    addToCart3({ commit, state }, HairC) {
      state.cart.hasOwnProperty(HairC.Id)
        ? HairC.quantity = state.cart[HairC.Id].quantity + 1
        : HairC.quantity = 1
      commit('setCart', HairC)
    },
    setToken({ commit }, token) {
      commit('setToken', token)
    },
    setUser({ commit }, users) {
      commit('setUser', users)
    }

  },
  modules: {

  }
})
