import { Api } from '@/api'
import router from '@/router'

const state = {
  userInfo: {}
}

const getters = {
  userType: state => {
    return state.userInfo.type
  }
}

const mutations = {
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  }
}

const actions = {
  getRouteAndRouter ({rootState}) {
    console.log(rootState.route)
    router.push({ name: 'index.about.index' })
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
  }
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
