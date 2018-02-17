import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modalType: '',
    showUserLeftMenu: false
  },
  mutations: {

    /**
     * 弹出各种拟态框 OR 关闭拟态框
     */
    changeModal (state, type = '') {
      state.modalType = type
    },

    /**
     * 是否展示用户左侧菜单
     */
    changeUserMenuShow (state) {
      state.showUserLeftMenu = !state.showUserLeftMenu
    }
  }
})
