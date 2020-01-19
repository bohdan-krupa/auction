<template>
  <header>
    <nav>
      <NLink to="/" class="logo">
        <img src="img/logo.png" alt="Logo" />
        <span>AucFine</span>
      </NLink>

      <div class="options">
        <NLink to="/">Аукціони</NLink>
        <NLink to="/about">Про нас</NLink>
        <NLink v-if="!isSignIn" to="/auth/sign-in">Увійти</NLink>
        <NLink v-if="!isSignIn" to="/auth/sign-up">Реєстрація</NLink>
        <NLink v-if="isSignIn" to="/dashboard">Профіль</NLink>
        <span v-if="isSignIn" @click="logout()" class="logout">Вийти</span>
        <span v-if="isSignIn">Баланс: 300 грн</span>
      </div>
    </nav>
  </header>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      isSignIn: false
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      this.isSignIn = user ? true : false;
    });
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          Toastify({
            text: "Logged out"
          }).showToast();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="sass" scoped>
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap")
  @import '~/assets/variables.sass'

  nav
    display: flex
    font-family: "Roboto"
    justify-content: space-between
    padding: 20px
    align-items: center

    .logo
      display: flex
      font-size: 40px

      img
        width: 70px

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
        font-size: 20px
        letter-spacing: 2px

        &.logout
          cursor: pointer

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
      overflow: hidden
</style>
