<template lang="html">
  <div class="sigup">
    <p>Let's create a new account!</p>
    <input
      type="text"
      placeholder="Email"
      v-model="email"><br>
    <input
      type="password"
      placeholder="Password"
      v-model="password"><br>
    <button @click="signUp">Sign Up</button>
    <span>or go back to <router-link :to="{ name: 'Login', params: {} }">login</router-link>.</span>
  </div>
</template>

<script>
import Firebase from 'firebase'
export default {
  name: 'sigup',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      Firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => { this.$router.replace('dashboard') },
          (err) => { alert('Oops. ' + err.message) }
        )
    }
  }
}
</script>

<style lang="css" scoped>
  .sigup {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 10%;
    padding: 15px;
  }
  button {
    margin: 10px 0;
    width: 20%;
    cursor: pointer;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }
</style>
