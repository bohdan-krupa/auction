<template>
  <div>
    <h1>Адмінка</h1>
    <div class="container">

      <div class="navigation">
        <nuxt-link to="/admin"  @click="changeState"> Аукціони</nuxt-link>
        <nuxt-link to="/admin" v-bind="isUsers"> Користувачі</nuxt-link>
      </div>

      <span> Додати аукціони </span>
      
      <div class="container-info" v-bind="isUsers" >
        <label>Імя товару: </label>
        <input type="text">
        <label>Початок: </label>
        <input type="text">
      </div>



    </div>
  </div>
</template>

<script>
  // bodya.save.dev@gmail.com
  // admin123
  import firebase from 'firebase'
  import axios from 'axios'

  export default {
    data() {
      return {
        isUsers: true,
      };
    },
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
    },
    methods: {
      changeState() { 
        
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '~/assets/variables.sass'
  h1
    text-align: center
    font-family: 'Alata', sans-serif
    letter-spacing: 5px
    font-size: 30px
    text-transform: uppercase
    margin-top: 40px
    color: #555

  .container
    width: 500px
    margin-top: 50px
    background-color: $grey-1
    box-shadow: 0 0 50px #555
    margin-left: auto
    margin-right: auto
    text-align: center

    span
      font-size: 20px

    .navigation
      display: flex
      justify-content: space-between
      padding: 20px

      a
        text-decoration: none
        font-family: 'Alata', sans-serif
        color: $text-color
        font-size: 20px
        font-weight: bold
    
    .container-info
      display: flex
      flex-flow: wrap column
      align-items: flex-start
      margin-left: 50px
      
      input
        margin-bottom: 10px
        outline: none
        height: 20px
        width: 200px
        border-radius: 10px
        border: 1px solid $main-background
        padding: 8px

        &:focus
          box-shadow: 0 0 5px #888
          border: 1px solid #DDD
          -webkit-transition: all 0.30s ease-in-out
          -moz-transition: all 0.30s ease-in-out
          -ms-transition: all 0.30s ease-in-out
          -o-transition: all 0.30s ease-in-out
          outline: none

          

      
    

      
      
  
</style>