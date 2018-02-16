<template>
  <div id="viewsBody">

    <nav-menu/>

    this is index views <hr/>

    <router-link to="/">index</router-link>
    <router-link to="/user">user</router-link>
    <router-link to="/category">category</router-link>
    <router-link to="/article">article</router-link>
  </div>
</template>

<script>
import navMenu from '@/components/base/navMenu'

export default {
  name: 'index',

  components: {
    navMenu
  }
}
</script>

<style scoped>

</style>
