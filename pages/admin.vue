<template>
  <div>
    <h1>Адмінка</h1>
      <div class="navigation">
        <nuxt-link to="" @click.native="auction"> Аукціони</nuxt-link>
        <nuxt-link to="" @click.native="users"> Користувачі</nuxt-link>
      </div>

    <div class="container">
      <span>Мої аукціони</span>
      <div class="auction">
        <div class="info">
          <span>№</span>
          <span>Назва</span>
          <span>Ціна</span>
          <span>Стан</span>
        </div>
      <div class="item">
        <p>1</p>
        <span>Bmw X6</span>
        <span>2000$</span>
        <span>Діючий</span>
        <img src="item/pen.svg" alt="">
      </div>

      </div>
      <div class="container-users" v-if="isUsers">
        <li>Users-1</li>
        <li>Users-2</li>
        <li>Users-3</li>
      </div>

      <div class="btn" @click="addAuction">Додати аукціон</div>



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
      addAuction() { 
        this.$router.push('/AuctionAdd')
      },
      fileSelected(event){
        console.log(event)

      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '~/assets/variables.sass'
  @import '~/assets/input.sass'
  @import '~/assets/btn.sass'
  .navigation
    display: flex
    justify-content: center
    margin: 50px
    a
      margin-right: 130px
      margin-left: 130px
      font-size: 25px
      
      &:hover
        border-bottom: 2px #777 solid
        padding: 0px
        color: #777

    
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
    padding-bottom: 50px

    .info
      span
        margin-right: 65px
    
    .item
      display: flex
      justify-content: space-around
      margin-left: 50px

      img
        width: 20px
          


</style>