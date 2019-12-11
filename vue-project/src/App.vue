<template>
  <div id="app2">
    <img src="./assets/logo.png">
    <!-- <div @click="toStage1" class="click">click here go to stage1</div> -->
    <a href="#/vue/stage1">{{'click to go to stage1'}}</a>
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
  methods: {
    toStage1 () {
      history.pushState('','','#/vue/stage1')
    }
  }
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
