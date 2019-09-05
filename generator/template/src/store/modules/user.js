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
  getRouteAndRouter ({ rootState }) {
    console.log(rootState.route)
  },

  async getUserInfo ({ commit }) {
    try {
      const res = await Api.getUserInfo()
      if (res.status) {
        commit('setUserInfo', res.data)
        return res.data
      } else {
        router.push({ name: 'login' })
      }
    } catch (error) {
      console.log(error)
    }
  },

  async logout ({ commit }) {
    try {
      const res = await Api.logout()
      if (res.status) {
        commit('setUserInfo', {})
        router.push({ name: 'login' })
      } else {
        console.log(res.message)
      }
    } catch (error) {
      console.log(error)
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
