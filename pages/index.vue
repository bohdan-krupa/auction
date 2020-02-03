<template>
  <div>
    <section class="top">
      <h1>Виграйте свою мрію</h1>
    </section>

    <section class="auctions-container">
      <h2>Поточні аукціони</h2>

      <div class="auctions">
        <AuctionBox v-for="(auction, index) in auctions" :auction="auction" :id="index" :key="index" />
      </div>
    </section>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import axios from 'axios'
  import AuctionBox from '../components/AuctionBox'

  export default {
    data() {
      return {
        auctions: []
      }
    },
    mounted() {
      firebase.database().ref('/auctions').on('value', snap => {
        this.auctions = snap.val()
      })
    },
    components: {
      AuctionBox
    }
  }
</script>

<style lang="sass" scoped>
  @import '~/assets/variables.sass'
  @import url('https://fonts.googleapis.com/css?family=Gelasio&display=swap')

  .top
    display: flex
    justify-content: center
    align-items: center
    background-image: url(~assets/img/bg.jpg)
    background-position: center
    height: 100vh
    background-size: cover
    text-align: center
    margin-top: -100px
    
    h1
      text-align: center
      font-size: 42px
      letter-spacing: 5px
      color: #FFF
      text-transform: uppercase
      text-shadow: 0 0 30px #000
    
  .auctions-container
    text-align: center

    h2
      font-family: 'Alata', sans-serif
      letter-spacing: 5px
      font-size: 30px
      text-transform: uppercase
      padding-top: 50px
      color: #555

    .auctions
      display: flex
      justify-content: center
      align-items: center
      flex-flow: wrap
      margin-top: 50px
      padding: 0 50px
</style>