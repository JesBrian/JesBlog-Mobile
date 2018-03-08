<template>
  <div id="app">
    <router-view style="background:#2E2E2E;"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    -webkit-text-size-adjust: 100%;
    font-family: -apple-system, "PingFang SC", "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-size: 62.5%;
    background: transparent;
  }
  body {
    width: 100%;
    height: 100%;
    -webkit-overflow-scrolling: touch;
  }
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, p, blockquote, th, td, hr, button, article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section, sumary {
    margin: 0;
    padding: 0;
  }
  input, select, textarea {
    border: 0;
    -webkit-appearance: none;
    appearance: none;
  }
  input:focus {
    outline: none;
  }
  ol, ul {
    list-style: none;
  }
  *:not(input, select, textArea) {
    -webkit-user-select: none;
  }
  img, a {
    -webkit-touch-callout: none;
  }
  a, a:active, a:hover {
    text-decoration: none;
  }
  a, button, input, textarea {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  html {
    font-size: 20px;
  }
  @media only screen and (min-width: 401px) {
    html {
      font-size: 25px !important;
    }
  }
  @media only screen and (min-width: 428px) {
    html {
      font-size: 26.75px !important;
    }
  }
  @media only screen and (min-width: 481px) {
    html {
      font-size: 30px !important;
    }
  }
  @media only screen and (min-width: 569px) {
    html {
      font-size: 35px !important;
    }
  }
  @media only screen and (min-width: 641px) {
    html {
      font-size: 40px !important;
    }
  }

  /* 灰色质感背景 */
  .cube-bg {
    border-radius: 3px;
    border: 0.5px solid #222;
    background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #444444), color-stop(100%, #373738));
    background-image: -moz-linear-gradient(#444444, #373738);
    background-image: -webkit-linear-gradient(#444444, #373738);
    background-image: linear-gradient(#444444, #373738);
  }
  /* 黑色类玻璃质感背景 */
  .glass-bg {
    background: #111;
    border: 1px solid #000;
    border-radius: 4px;
    box-shadow: inset 0 0 0 1px #272727;
  }
  /* 阴影效果 */
  .box-show {
    box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;
  }

  .box-shadow {
    position:relative;
  }
  .box-shadow:before, .box-shadow:after {
    content: '';
    width: 86%;
    height: 1px;
    left:50%;
    transform:translate(-50%, 0);
    position: absolute;
    z-index:9;
  }
  .box-shadow:last-child:before, .box-shadow:last-child:after {
    display:none;
  }
  .box-shadow:before {
    bottom: -1px;
    background: #333;
  }
  .box-shadow:after {
    bottom: -.3px;
    background: #000;
  }

  .super-btn-out {
    position: relative;
    display: inline-block;
    border: 1px solid #505050;
    border-radius: 2.5px;
    background-image: linear-gradient(#2af1fc, #1a9ee6);
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.5), 0 2px 2px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    user-select: none;
  }
  .super-btn-in {
    top: 49%;
    left: 50%;
    padding: 0;
    display: inline-block;
    position: absolute;
    transform: translate(-50%, -50%);
    text-align: center;
    font-weight: 700;
    background-image: linear-gradient(#2e3537, #424748);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(80, 80, 80, 0.3), inset 0 0 0 1px rgba(0, 0, 0, 0.1), 0 0 1px rgba(80, 80, 80, 0.5), 0 2px 2px rgba(0, 0, 0, 0.4);
    border: none;
    color: #AAA;
    text-shadow: 2px 2px 5px #000;
  }
  .super-btn-out:active > .super-btn-in {
    color: #5CEBDC;
    box-shadow: 0 -0.1px 2px rgba(0, 0, 0, 0.7), 0 0 2px rgba(255, 255, 255, 0.4), 0 0 2px rgba(0, 0, 0, 0.3), inset 0 0 3px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(0, 0, 0, 0.6);
  }

  /*  */
  .text-hidden {
    word-break:break-all;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
  }

  #app {
    width: 100%;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background: #2E2E2E;
  }

</style>
