<template>
  <header>
    <nav>
      <div class="logo">
        <img src="img/icons8-рукопожатие-100.png" alt="Logo" />
        <span>AucFine</span>
      </div>

      <div class="options">
        <NLink to="/">Аукціони</NLink>
        <NLink v-if="!isSignIn" to="/auth/sign-in">Увійти</NLink>
        <NLink v-if="!isSignIn" to="/auth/sign-up">Реєстрація</NLink>
        <NLink v-if="isSignIn" to="/dashboard">Профіль</NLink>
        <span v-if="isSignIn">Баланс: 300 грн</span>
      </div>
    </nav>
  </header>
</template>

<script>
  import firebase from 'firebase'

  export default {
    data() {
      return {
        isSignIn: false
      }
    },
    mounted() {
      firebase.auth().onAuthStateChanged(user => {
        this.isSignIn = user ? true : false
      })
    }
  }
</script>

<style lang="sass" scoped>
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap")
  @import '~/assets/variables.sass'

  nav
    display: flex
    justify-content: space-between
    padding: 20px
    align-items: center

    .logo
      display: flex
      font-family: "Roboto"
      font-size: 50px

      img
        width: 80px

      span
        margin-left: 20px
        margin-top: 10px

    .options
      display: flex
      margin-right: 25px
      flex-flow: wrap

      a, span
        margin-right: 25px
        list-style: none
        font-size: 22px
        font-family: "Roboto"
        letter-spacing: 2px

  @media screen and (max-width: 875px)
    .navigation
      display: flex
      flex-flow: column

    img
      width: 50px
      height: 50px
    
    span
      font-size: 30px



  @media screen and (max-width: 415px)
    .burger-menu
      width: 50px
      height: 50px
      box-sizing: border-box
      overflow: hidden
</style>
