<template>
  <div id="app">

    <div class="container">

      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <h1>BUUUUUUURNIIIIIING AIIIIRLIIIIINES</h1>
        </div>
        <div class="col-1"></div>
      </div><!-- row -->

      <div class="row">

        <div class="col-1"></div>
        <div class="col-10">

          <!-- like Rails 'yield' -->
          <router-view/>

        </div>
        <div class="col-1"></div>

      </div><!-- row -->


    </div><!-- container -->

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  methods: {
    setJWTHeaderFromLocalStorage(){
      if( window.localStorage ){
        axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('authToken');
      }
    }
  },
  created(){
    this.setJWTHeaderFromLocalStorage();
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
