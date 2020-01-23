<template>
  <h1>Адмінка</h1>
</template>

<script>
  // bodya.save.dev@gmail.com
  // admin123
  import firebase from 'firebase'
  import axios from 'axios'

  export default {
    mounted() {
      firebase.auth().onAuthStateChanged(async user => {
        if (user) {
          const token = await user.getIdToken()

          axios
            .get(`${process.env.BASE_API}/admin/isAdmin`, {
              headers: { Authorization: "Bearer " + token }
            })
            .then(res => {
              if (!res.data) {
                this.$router.replace('/auth/sign-in')
              }
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          this.$router.replace('/auth/sign-in')
        }
      })
    }
  }
</script>

<style lang="sass" scoped>
  h1
    text-align: center
    font-family: 'Alata', sans-serif
    letter-spacing: 5px
    font-size: 30px
    text-transform: uppercase
    margin-top: 40px
    color: #555
</style>