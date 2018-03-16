<template lang="html">
  <div class="login">
    <h3>Sign In</h3>
    <input
      type="text"
      placeholder="Email"
      v-model="email"><br>
    <input
      type="password"
      placeholder="Password"
      v-model="password"><br>
    <button @click="sigIn">Connection</button>
    <p>You don't have an account? You can <router-link :to="{ name: 'SignUp', params: {} }">create one</router-link></p>
  </div>
</template>

<script>
import Firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    sigIn () {
      Firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => { this.$router.replace('dashboard') },
          (err) => { alert('Oops. ' + err.message) }
        )
    }
  }
}
</script>

<style lang="css" scoped>
  .login {
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
  p a {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
