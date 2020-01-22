<template>
  <h1>ABOUT</h1>
</template>

<script>
  import firebase from 'firebase'
  // import axios from 'axios'

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // user.getIdToken().then(token => {
      //   axios.get('http://localhost:5001/aucfine/us-central1/api', {
      //     headers: { Authorization: "Bearer " + token }
      //   }).then(res => {
      //     console.log(res.data)
      //   })
      // })
    }
  })

  export default {
  }
</script>