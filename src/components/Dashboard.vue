<template lang="html">
  <div class="">
    <div class="">
      <button @click="logout">Logout</button>
    </div>
    <hr>
    <div class="">
      <label>Name</label>
      <input type="text" v-model="name">
      <button type="button" @click="submitName">Add</button>
    </div>
    <hr>
    <div class="">
      <ul>
        <li v-for="person in names" :key="person['.key']">
          <div v-if="!person.edit">
            {{ person.name }}
            <button type="button" @click="setEdit(person['.key'])">Edit</button>
            <button type="button" @click="remove(person['.key'])">Remove</button>
          </div>
          <div v-if="person.edit">
            <input type="text" v-model="person.name">
            <button type="button" @click="saveEdit(person)">Save</button>
            <button type="button" @click="cancelEdit(person['.key'])">Cancel</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'
import { namesRef } from '../firebase/firebase'

export default {
  name: 'dashboard',
  data () {
    return {
      name: ''
    }
  },
  firebase: {
    names: namesRef
  },
  methods: {
    submitName () {
      namesRef.push({ name: this.name, edit: false })
      this.name = ''
    },
    setEdit (key) {
      namesRef.child(key).update({ edit: true })
    },
    cancelEdit (key) {
      namesRef.child(key).update({ edit: false })
    },
    saveEdit (person) {
      const key = person['.key']
      namesRef.child(key).update({ name: person.name, edit: false })
    },
    remove (key) {
      namesRef.child(key).remove()
    },
    logout () {
      Firebase.auth().signOut()
        .then(
          () => { this.$router.replace('login') }
        )
    }
  }
}
</script>

<style lang="css">
</style>
