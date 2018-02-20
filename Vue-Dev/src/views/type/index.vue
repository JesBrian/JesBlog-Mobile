<template>
  <div>
    <slide-box style="width:92%; height:188px; margin:0 auto;"/>

    <router-link to="/m">index</router-link>
    <router-link to="/m/user">user</router-link>
    <router-link to="/m/category">category</router-link>
    <router-link to="/m/article">article</router-link>
    <router-link to="/m/search">search</router-link>
    <router-link to="/m/write">write</router-link>
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
  }
}
</script>

<style scoped>

</style>
