<template>
  <div>
    <h1>Адмінка</h1>
    <div class="container">

      <div class="navigation">
        <nuxt-link to="" @click.native="auction"> Аукціони</nuxt-link>
        <nuxt-link to="" @click.native="users"> Користувачі</nuxt-link>
      </div>

      <span  v-if="!isUsers"> Додати аукціони </span>
      
      <div class="container-info" v-if="!isUsers">
        <label>Імя товару: </label>
        <input type="text">
        <label>Початок: </label>
        <input type="text">
      </div>

      <span  v-if="!isUsers">Опис</span>

      <div class="container-desc" v-if="!isUsers">
        <textarea placeholder="Опис продукта"></textarea>
        <div class="price">
          <img src="img/coin.svg" alt="Price">
          <input type="text" placeholder="Price">
          <select>
            <option value="$">$</option>
            <option value="€">€</option>
            <option value="₴">₴</option>
          </select>

        </div>
        <div class="time" v-if="!isUsers">
          <img src="img/money.svg" alt="Price" >
          <input type="time" placeholder="Time" min="9:00" max="00:00">
        </div>

      </div>

      <div class="container-users" v-if="isUsers">
        <li>Htlfasdasdasd</li>
        <li>dasdasd</li>
        <li>sadadasd</li>
      </div>
      
      <div class="btn">Готово</div>



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
        isUsers: false,
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
      auction(){
        this.isUsers = false
      },
      users(){
        this.isUsers = true
      },
      changeShow() { 
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '~/assets/variables.sass'
  @import '~/assets/input.sass'
  @import '~/assets/btn.sass'
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
    
    .container-desc 
      display: flex
      flex-flow: column wrap

      .price
        display: flex
        align-items: center
        justify-content: center

        select
          width: 40px
          height: 15px
          outline: none 
          margin-left: 10px
  

        select > option
          background-color: #999 

        input
          width: 100px
          height: 20px
      
      img
        width: 30px
        margin: 10px
      
      textarea
        width: 350px
        height: 250px
        border-radius: 10px
        border: 1px solid $main-background
        outline: none
        resize: none
        padding: 10px
        font-size: 15px
        font-weight: bold
        margin-left: auto
        margin-right: auto
      
      .time
        display: flex
        flex: flow-wrap
        justify-content: center
        align-items: center

        input
          width: 100px
          height: 20px
          padding: 2px
          border-radius: 3px
          margin-right: 50px
          


</style>