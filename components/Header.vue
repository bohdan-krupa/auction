<template>
  <header>
    <nav>
      <div class="mask">
        <NLink to="/" class="logo">
          <img src="img/logo.png" alt="Logo" />
          <h1 :class="{ white: isWhite }">AucFine</h1>
        </NLink>
      </div>

      <div class="options">
        <NLink to="/" :class="{ white: isWhite }">Аукціони</NLink>
        <NLink to="/about" :class="{ white: isWhite }">Про нас</NLink>
        <NLink v-if="!isSignIn" to="/auth/sign-in" :class="{ white: isWhite }">Увійти</NLink>
        <NLink v-if="!isSignIn" to="/auth/sign-up" :class="{ white: isWhite }">Реєстрація</NLink>
        <NLink v-if="isSignIn" to="/dashboard" :class="{ white: isWhite }">Профіль</NLink>
        <span v-if="isSignIn" @click="logout()" :class="{ white: isWhite }" class="logout">Вийти</span>
        <span v-if="isSignIn" :class="{ white: isWhite }">Баланс: 300 грн</span>
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
  computed: {
    isWhite() {
      return this.$route.name == 'index'
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      this.isSignIn = user ? true : false;
    });
  },
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        Toastify({
          text: "Logged out"
        }).showToast();
      }).catch(error => {
        console.log(error);
      })
    }
  }
};
</script>

<style lang="sass" scoped>
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap")
  @import '~/assets/variables.sass'

  .white
    color: #FFF
    text-shadow: 0 0 15px #000

  nav
    display: flex
    justify-content: space-between
    align-items: center
    height: 100px
    font-family: 'Roboto'
    padding: 20px
    
    .logo
      display: flex
      align-items: center

      img
        width: 70px

      h1
        font-size: 35px
        margin-left: 20px

    .options
      display: flex
      flex-flow: wrap

      a, span
        margin: 15px
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
