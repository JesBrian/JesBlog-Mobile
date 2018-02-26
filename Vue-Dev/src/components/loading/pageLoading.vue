<template>
  <div class="loader">
    <div class="loading-1"></div>
    <div class="loading-2">Loading ...</div>
  </div>
</template>

<script>
export default {
  name: 'page-loading'
}
</script>

<style scoped>
  .loader {
    width: 208px;
    top:48%;
    left:50%;
    transform:translate(-50%,-50%);
    position:absolute;
  }

  .loader .loading-1 {
    position: relative;
    width: 100%;
    height: 10px;
    border: 1px solid #2893ff;
    border-radius: 10px;
    animation: turn 4s linear 1.75s infinite;
  }

  .loader .loading-1:before {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 100%;
    background: linear-gradient(to right, #64E0FF, #2893ff); /* 标准的语法 */
    border-radius: 10px;
    box-shadow: 3px 0 10px 0 #69d2e7;
    animation: load 2s linear infinite;
  }

  .loader .loading-2 {
    width: 100%;
    margin-top: 8px;
    position: absolute;
    top: 10px;
    color: #2dbeff;
    font-size: 22px;
    text-align: center;
    animation: bounce 2s linear infinite;
  }

  @keyframes load {
    0% {
      width: 0;
    }
    87.5%, 100% {
      width: 100%;
    }
  }

  @keyframes turn {
    0% {
      transform: rotateY(0deg);
    }
    6.25%, 50% {
      transform: rotateY(180deg);
    }
    56.25%, 100% {
      transform: rotateY(360deg);
    }
  }

  @keyframes bounce {
    0%, 100% {
      top: 10px;
    }
    12.5% {
      top: 30px;
    }
  }
</style>
