import Vue from 'vue'
import App from './App.vue'
// 设置 rem 函数
function setRem () {

  let docEl = document.documentElement;
  let width = docEl.clientWidth >= 750 ? 750 : docEl.clientWidth;
  let fontSize = width / 10;
  let defaultUIWidth = 750;
  let fontScale = width / defaultUIWidth;
  document.querySelector("html").style.fontSize = fontSize + "px";
  document.querySelector("body").style.fontSize = 20 * fontScale + "px";
}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
