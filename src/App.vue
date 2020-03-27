<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <list-items 
      v-if="false"
      title="text"
      type='text' 
      maxlength="11" 
      placeholder="请填写"
      v-model="val"
    >
    </list-items>
    <dateItems></dateItems>
  </div> 
</template>

<script>
import listItems from './components/list-items.vue'
import dateItems from './components/date-items.vue'
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

<style>
input{
  color: red !important;
  background: #fff;
}
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
