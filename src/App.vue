<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="picker">
      <div class="value"></div>
      <div class="select" @scroll="onScroll">
        <div class="content-main"></div>
        <div class="demo"></div>
        <div class="content-main"></div>
      </div>
    </div>
    
    <list-items
      v-if="false" 
      title="text"
      type='text' 
      maxlength="11" 
      placeholder="请填写"
      v-model="val"
    >
    </list-items>
    <dateItems v-if="false"></dateItems>
  </div> 
</template>

<script>
import listItems from './components/list-items.vue'
import dateItems from './components/date-items.vue'
import './assets/styles/index.styl'
export default {
  name: 'App',
  data() {
    return {
      val: 'asfasf'
    };
  },
  watch: {
    val(val) {
      console.log(val)
    }
  },
  methods: {
    onScroll(e) {
      console.log(e)
    },
    input123(val) {
      console.log('==> ', val)
    }
  },
  components: {
    listItems,
    dateItems
  }
}
</script>

<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body,li,ul,ol,html{margin: 0;padding: 0;list-style: none;color: #333;}
</style>
