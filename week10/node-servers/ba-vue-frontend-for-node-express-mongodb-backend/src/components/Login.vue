<template>
  <div class="text-center">
    <h3>Login</h3>
    <input type="text"     v-model="email"    placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="doLogin">Login</button>
    <br>
    <div v-if="error" class="login-error">{{ error }}</div>

    <br>
    <button @click="testAJAX">Test Request</button>


  </div>
</template>


<script>
import axios from 'axios';
const SERVER_AUTH_TOKEN_URL = 'http://localhost:3000/user_token';

export default {
  data(){
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    testAJAX(){
      console.log('clicked');
      axios.get('http://localhost:3000/flights/19.json')
      .then( response => {
        console.log('SUCCESS', response.data);
      })
      .catch( err => console.log('FAIL', err) );
    },
    decodeJWT( token ){
      const base64URL = token.split('.')[1];
      const base64 = base64URL.replace('-', '+').replace('_', '/');
      return JSON.parse( atob(base64) );
    },
    doLogin(){
      axios.post(SERVER_AUTH_TOKEN_URL, {
        auth: {email: this.email, password: this.password}
        // auth: this.$data
      })
      .then( response => {
        if( response.data.jwt ){
          console.log(response.data);
          console.log( this.decodeJWT(response.data.jwt) );

          // This header-setting line also appears in App.vue, but that's too late for
          // us here; it will already have run by the time we perform this login -
          // so we have to set the header again here, for *this* page lifetime
          axios.defaults.headers.common['Authorization'] = "Bearer " + response.data.jwt;

          if( window.localStorage ){
            localStorage.setItem('authToken', response.data.jwt)
          }

        }
      })
      .catch( err => {
        console.warn('FAIL', err);
        this.error = 'Invalid username or password.'
      });

    },
  }
};
</script>

<style>
</style>
