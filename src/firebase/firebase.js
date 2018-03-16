import { initializeApp } from 'firebase'

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyCCjAUbPtx8Ljz2rbm7eGxqKMvpNzTunFg',
  authDomain: 'fb-test-43343.firebaseapp.com',
  databaseURL: 'https://fb-test-43343.firebaseio.com',
  projectId: 'fb-test-43343',
  storageBucket: '',
  messagingSenderId: '522899803887'
})

export const db = firebaseApp.database()
export const namesRef = db.ref('names')
