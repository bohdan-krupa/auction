<template>
  <div>
    <section class="top">
      <h1>Don't fuck yourself</h1>
    </section>

    <section class="auctions-container">
      <h2>Поточні аукціони</h2>

      <div class="auctions">
        <div v-for="(auction, index) in auctions" :key="index" class="item">
          <NLink :to="`/auction/${index.replace('-', '')}`">
            <p class="title">{{auction.title}}</p>
            <img src="item/bmw.png" alt="item" />
            <p v-if="auction.startTime > 0" class="starts-in">Початок через:</p>
            <div v-else>
              <p class="buyer">mr.Robot</p>
              <p class="timer">00:00:10</p>
              <p class="price">20000 грн</p>
            </div>
          </NLink>

          <div v-if="auction.startTime > 0" class="btn no-btn">
            {{secondsToTime(auction.startTime).h}}год {{secondsToTime(auction.startTime).m}}хв {{secondsToTime(auction.startTime).s}}с
          </div>
          <div v-else class="btn" @click="makeBid()">Підвищити ставку</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from "axios"


  export default {
    data() {
      return {
        auctions: null
      }
    },
    methods: {
      makeBid() {
        console.log("some magic")
      }
    },
    mounted() {
      axios
        .get(`${process.env.BASE_API}/auctions`)
        .then(res => {
          console.log(res.data)
          this.auctions = res.data
        })
        .catch(err => {
          console.log(err)
        })
    }, methods: {
        secondsToTime(secs) {
          secs = Math.round(secs)
          const hours = Math.floor(secs / (60 * 60))

          const divisorForMinutes = secs % (60 * 60)
          const minutes = Math.floor(divisorForMinutes / 60)

          const divisorForSeconds = divisorForMinutes % 60
          const seconds = Math.ceil(divisorForSeconds)

          const obj = {
            'h': hours,
            'm': minutes,
            's': seconds
          }
          return obj
      }
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
    background-image: url(/img/bg.jpg)
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
      
      .item
        display: flex
        flex-flow: column
        align-items: center
        width: 240px
        height: 320px
        margin: 15px
        background: #DDD
        border-radius: 30px
        box-shadow: 0 0 20px #555
        transition: all 200ms

        &:hover
          transform: scale(1.05)

        .title
          margin-top: 10px
          font-size: 18px
          font-weight: bold
          color: #333

        img
          height: 120px

        .buyer, .timer
          font-size: 17px
          line-height: 25px
          color: #333

        .timer
          font-weight: bold

        .price, .starts-in
          font-size: 20px
          font-weight: bold
          color: #333
          letter-spacing: 1px

        .starts-in
          margin-top: 48px

        .btn
          width: 180px
          margin: auto 0 30px 0
          padding: 10px
          background: #555
          color: #FFF
          border-radius: 10px
          font-size: 18px
          letter-spacing: 1px
          user-select: none
          cursor: pointer

          &.no-btn
            user-select: text
            cursor: text
</style>
