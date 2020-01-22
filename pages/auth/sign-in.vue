<template>
  <section>
    <div class="container">
      <h2>Вхід</h2>
      <label>Email:</label>
      <input v-model="email" type="email" placeholder="Email" />

      <label>Пароль:</label>
      <input v-model="password" type="password" placeholder="Не менше 6 знаків" />

      <div @click="toSignIn" class="btn">Увійти</div>

      <div class="sign-up">
        <p>Не зареєстровані?</p>
        <NLink to="/auth/sign-up">Створити акаунт</NLink>
      </div>
    </div>
  </section>
</template>

<script>
  import firebase from 'firebase'

  export default {
    data() {
      return {
        email: null,
        password: null
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
      toSignIn() {
        if (this.email && this.password) {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
            Toastify({
              text: 'Signed in'
            }).showToast()
          }).catch(error => {
            Toastify({
              text: error.message
            }).showToast()
          })
        }
      }
    },
    props: {
      logged: Number
    }
  }
</script>

<style lang="sass" scoped>
  @import '~/assets/variables.sass'
  @import '~/assets/auth.sass'
</style>