<template>
  <div id="app2">
    <img src="./assets/logo.png">
    <a href="#/vue/stage1"><div>click to go to stage1</div></a>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Stage1 from './components/stage1'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Stage1
  },
}
</script>

<style>
#app2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.click {
  cursor: pointer;
}
</style>
