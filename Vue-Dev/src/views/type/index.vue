<template>
  <div>
    this is index views <hr/>
    <router-link to="/m">index</router-link>
    <router-link to="/m/user">user</router-link>
    <router-link to="/m/category">category</router-link>
    <router-link to="/m/article">article</router-link>
    <router-link to="/m/search">search</router-link>
  </div>
</template>

<script>
export default {
  name: 'index',

  data () {
    return {
    }
  },

  components: {}
}
</script>

<style scoped>

</style>
