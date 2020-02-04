<template>
  <header>
    <nav>
      <div class="mask">
        <NLink to="/" class="logo">
          <h1 :class="{ white: isWhite }">AucFine</h1>
        </NLink>
      </div>

      <div class="options">
        <NLink to="/about" :class="{ white: isWhite }">Про нас</NLink>
        <NLink v-if="!isSignIn" to="/auth/sign-in" :class="{ white: isWhite }">Увійти</NLink>
        <NLink v-if="!isSignIn" to="/auth/sign-up" :class="{ white: isWhite }">Реєстрація</NLink>
        <NLink v-if="isSignIn && !isAdmin" to="/dashboard" :class="{ white: isWhite }">Профіль</NLink>
        <NLink v-if="isAdmin" to="/admin" :class="{ white: isWhite }">Адмінка</NLink>
        <span v-if="isSignIn" @click="logout()" :class="{ white: isWhite }" class="logout">Вийти</span>
        <span v-if="isSignIn && !isAdmin" :class="{ white: isWhite }">Баланс: 0 грн</span>
      </div>
    </nav>
  </header>
</template>

<script>
  import firebase from "firebase"
  import axios from 'axios'

  export default {
    data() {
      return {
        isSignIn: false,
        isAdmin: false
      };
    },
    computed: {
      isWhite() {
        return this.$route.name == 'index'
      }
    },
    mounted() {
      firebase.auth().onAuthStateChanged(async user => {
        this.isSignIn = user ? true : false

        if (user) {
          const token = await user.getIdToken()
            
          axios.get(`${process.env.BASE_API}/admin/isAdmin`, {
            headers: { Authorization: "Bearer " + token }
          }).then(res => {
            this.isAdmin = res.data
          })
        } else {
          this.isAdmin = false
        }
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
  @import '~/assets/variables.sass'

  .white
    color: #FFF
    text-shadow: 0 0 30px #000

  nav
    display: flex
    justify-content: space-between
    align-items: center
    height: 100px
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
