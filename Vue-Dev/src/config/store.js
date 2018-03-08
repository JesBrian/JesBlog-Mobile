import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // baseHost: 'http://jesbrian.cn/JesBlog-Backstage/web/',
    baseHost: 'http://blog.jesbrian.cn/', // 服务器生产环境部署配置域名
    modalType: '',
    tips: '',
    showUserLeftMenu: false,
    showFloatBlock: false
  },
  mutations: {

    /**
     * 弹出各种拟态框 OR 关闭拟态框
     */
    changeModal (state, type = '') {
      state.modalType = type
    },

    /**
     * 弹出提示框
     */
    changeTips (state, tips = '') {
      state.tips = tips
    },

    /**
     * 是否展示用户左侧菜单
     */
    changeUserMenuShow (state) {
      state.showUserLeftMenu = !state.showUserLeftMenu
    },

    /**
     * 是否显示回到顶部按钮
     */
    changeFloatBlockShow (state, type = true) {
      state.showFloatBlock = type
    }
  }
})
