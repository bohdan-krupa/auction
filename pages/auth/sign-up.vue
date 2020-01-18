<template>
  <div>
    <div class="container">
      <h2>Реєстрація</h2>

      <label>Email:</label>
      <input v-model="email" type="email" placeholder="Ведіть свій Email" />
      <label>Пароль:</label>
      <input v-model="password" type="password" placeholder="Придумайте пароль" />
      <label>Повторіть пароль:</label>
      <input v-model="password2" type="password" placeholder="Повторіть пароль" />

      <div @click="toSignUp" class="btn">Register</div>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    data() {
      return {
        email: null,
        password: null,
        password2: null
      }
    },
    mounted() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.$router.replace('/')
        }
      })
    },
    methods: {
      toSignUp() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(() => {
          Toastify({
            text: 'Created'
          }).showToast()
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '~/assets/variables.sass'
  @import '~/assets/auth.sass'
</style>