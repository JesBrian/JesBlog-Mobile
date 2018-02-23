<template>
  <div>
    <slide-box style="width:92%; height:188px; margin:0 auto;"/>

    <router-link to="/m">index</router-link>
    <router-link to="/m/user">user</router-link>
    <router-link to="/m/category">category</router-link>
    <router-link to="/m/article">article</router-link>
    <router-link to="/m/search">search</router-link>
    <router-link to="/m/write">write</router-link><hr/>

    <button @click="testModal('warning')" style="padding:2px 5px; font-size:18px;">Test Warning</button>
    <button @click="testModal('login')" style="padding:2px 5px; font-size:18px;">Test Login</button>
    <button @click="testModal('register')" style="padding:2px 5px; font-size:18px;">Test Register</button>

    <hr/>

    <div class="glass-bg box-show" style="width:92%; margin:8px auto;">
      <ul>
        <li class="box-shadow" style="width:99%; height:88px; margin:8px auto;"></li>
        <li class="box-shadow" style="width:99%; height:88px; margin:8px auto;"></li>
        <li class="box-shadow" style="width:99%; height:88px; margin:8px auto;"></li>
        <li class="box-shadow" style="width:99%; height:88px; margin:8px auto;"></li>
        <li class="box-shadow" style="width:99%; height:88px; margin:8px auto;"></li>
        <li class="box-shadow" style="width:99%; height:88px; margin:8px auto;"></li>
        <li class="box-shadow" style="width:99%; height:88px; margin:8px auto;"></li>
        <li class="box-shadow" style="width:99%; height:88px; margin:8px auto;"></li>
      </ul>
    </div>

  </div>
</template>

<script>
import slideBox from '@/components/base/slideBox.vue'

export default {
  name: 'index',

  components: {
    slideBox
  },

  data () {
    return {
    }
  },

  methods: {
    testModal (type) {
      this.$store.commit('changeModal', type)
    }
  }
}
</script>

<style scoped>

</style>
