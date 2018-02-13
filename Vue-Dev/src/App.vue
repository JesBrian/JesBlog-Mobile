<template>
  <div id="app">
    <router-view style="width:100%; height:100%; overflow-y:auto;"/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    width:100%; height:100%;
    top:0;
    left:0;
    position:fixed;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background:#2E2E2E;
  }


  #viewsBody {
    width:100%; max-width:640px; display:inline-block; background:lightgreen; margin:0 auto;
  }
</style>
