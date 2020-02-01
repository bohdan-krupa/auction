<template>
  <div>
    <h1>Адмінка</h1>
    <div class="navigation">
      <div class="subtitle" @click="switchShow('auctions-list')">Аукціони</div>
      <div class="subtitle" @click="switchShow('users-list')">Користувачі</div>
    </div>

    <AuctionsList v-if="showMode == 'auctions-list'" />

    <div v-if="showMode == 'add-auction'" class="container">

      <span  v-if="!isUsers"> Додати аукціон</span>
      
      <div class="container-info" v-if="!isUsers">
        <label>Імя товару: </label>
        <input type="text">
      </div>

      <span  v-if="!isUsers">Опис</span>

      <div class="container-desc" v-if="!isUsers">
        <textarea placeholder="Опис продукту"></textarea>
        <div class="price">
          <img src="img/coin.svg" alt="Price">
          <input type="text" placeholder="Price">


        </div>
        <div class="time" v-if="!isUsers">
          <img src="img/money.svg" alt="Price" >
          <input type="time" placeholder="Time" min="9:00" max="00:00">
          <input type="file" value="Добавте фото" @click="fileSelected">
        </div>

      </div>

      <div class="container-users" v-if="isUsers">
        <li>Users-1</li>
        <li>Users-2</li>
        <li>Users-3</li>
      </div>

      <div class="btn">Готово</div>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import axios from 'axios'
  import AuctionsList from '~/components/admin/AuctionsList'

  export default {
    data() {
      return {
        showMode: 'auctions-list'
      }
    },
    mounted() {
      firebase.auth().onAuthStateChanged(async user => {
        if (user) {
          const token = await user.getIdToken()

          axios.get(`${process.env.BASE_API}/admin/isAdmin`, {
            headers: { Authorization: 'Bearer ' + token }
          }).then(res => {
            if (!res.data) {
              this.$router.replace('/auth/sign-in')
            }
          }).catch(err => {
            console.log(err)
          })
        } else {
          this.$router.replace('/auth/sign-in')
        }
      })
    },
    methods: {
      switchShow(display) {
        this.showMode = display
      }
    },
    components: {
      AuctionsList
    }
  }
</script>

<style lang="sass" scoped>
  @import '~/assets/variables.sass'
  @import '~/assets/input.sass'

  h1
    text-align: center
    font-family: 'Alata', sans-serif
    letter-spacing: 5px
    font-size: 30px
    text-transform: uppercase
    margin-top: 40px
    color: #555

  .navigation
    display: flex
    justify-content: space-between
    width: 700px
    margin: 50px auto 0 auto
    font-family: 'Alata', sans-serif
    color: #555
    font-size: 20px
    letter-spacing: 2px
    cursor: pointer

    span
      font-size: 20px
    
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