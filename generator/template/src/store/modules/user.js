import { Api } from '@/api'
import router from '@/router'

const state = {
  userInfo: {}
}

const getters = {
  userType: state => state.userInfo.type,
  username: state => state.userInfo.username
}

const mutations = {
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  }
}

const actions = {
  getRouteInfo ({ rootState }) {
    console.log('routeInfo: ', rootState.route)
  },

  async getUserInfo ({ commit }) {
    try {
      const data = await Api.getUserInfo()
      commit('setUserInfo', data)
      return data
    } catch (error) {
      console.error(error)
      return false
    }
  },

  async logout ({ commit }) {
    try {
      await Api.logout()
      commit('setUserInfo', {})
      router.push({ name: 'login' })
    } catch (error) {
      console.error(error)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
