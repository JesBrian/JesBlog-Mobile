import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // baseHost: 'http://jesbrian.cn/JesBlog-Backstage/web/',
    baseHost: 'http://blog.jesbrian.cn/', // 服务器生产环境部署配置域名
    transitionName: 'fade-left',
    oauthType: '',
    modalType: '',
    tips: '',
    showUserLeftMenu: false,
    showFloatBlock: false
  },
  mutations: {

    /**
     * 重置 Vuex 变量
     * @param state
     */
    resetVuexStore (state) {
      state.transitionName = 'fade-left'
      state.modalType = ''
      state.oauthType = ''
      state.tips = ''
      state.showUserLeftMenu = false
    },

    /**
     * 切换路由滑动效果
     * @param state
     * @param type
     */
    changeRouterTransition (state, type = 'fade-left') {
      state.transitionName = type
    },

    /**
     * 弹出各种拟态框 OR 关闭拟态框
     * @param state
     * @param type
     */
    changeModal (state, type = '') {
      state.modalType = type
    },

    /**
     * 改变第三方登陆类型
     * @param state
     * @param type
     */
    changeOAuthType (state, type = '') {
      state.oauthType = type
    },

    /**
     * 弹出提示框
     * @param state
     * @param tips
     */
    changeTips (state, tips = '') {
      state.tips = tips
    },

    /**
     * 是否展示用户左侧菜单
     * @param state
     */
    changeUserMenuShow (state) {
      state.showUserLeftMenu = !state.showUserLeftMenu
    },

    /**
     * 是否显示回到顶部按钮
     * @param state
     * @param type
     */
    changeFloatBlockShow (state, type = true) {
      state.showFloatBlock = type
    }
  }
})
