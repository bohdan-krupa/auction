<template>
  <div>
    <section class="top">
      <h1>Don't fuck yourself</h1>
    </section>

    <section class="auctions-container">
      <h2 @click="addAuction()">Поточні аукціони</h2>

      <div class="auctions">
        <div v-for="(auction, index) in auctions" :key="index" class="item">
          <NLink :to="`/auction/${auction.id.replace('-', '')}`">
            <p class="title">{{auction.title}}</p>
            <img src="item/bmw.png" alt="item" />
            <p v-if="auction.startTime > 0" class="starts-in">Початок через:</p>
            <div v-else>
              <p class="buyer">{{auction.buyer}}</p>
              <p class="timer">00:00:0{{msToSeconds(auction.currentTime)}}</p>
              <p class="price">{{auction.currentPrice}} грн</p>
            </div>
          </NLink>

          <div v-if="auction.startTime > 0" class="btn no-btn">
            {{msToTime(auction.startTime).h}}год {{msToTime(auction.startTime).m}}хв {{msToTime(auction.startTime).s}}с
          </div>
          <div v-else class="btn" @click="makeBid(auction.id)">Підвищити ставку</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import axios from 'axios'

  export default {
    data() {
      return {
        auctions: [],
        interval: null
      }
    },
    mounted() {
      firebase.database().ref('/auctions').on('value', snap => {
        const auctions = snap.val()

        clearInterval(this.interval)
        this.interval = setInterval(() => {
          this.auctions = []

          for (let key in auctions) {
            const auction = auctions[key]
  
            this.auctions.push({
              id: key,
              title: auction.title,
              desc: auction.desc,
              price: auction.price,
              currentPrice: auction.currentPrice,
              images: auction.images,
              startTime: new Date(auction.startTime) - new Date(),
              currentTime: new Date(auction.currentTime) - new Date() > 0 ? new Date(auction.currentTime) - new Date() : 0,
              buyer: auction.buyer
            })
          }
        }, 1000)
      })
    },
    methods: {
      makeBid: async (auctionId) => {
        const token = await firebase.auth().currentUser.getIdToken(true)

        axios.get(`${process.env.BASE_API}/make-bid?id=${auctionId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }).then(res => {
          console.log(res.data)
        })
      },
      addAuction() {
        const time = new Date()
        time.setSeconds(time.getSeconds() + 60)

        const startTime = time.toJSON()
        const currentTime = new Date(time.setSeconds(time.getSeconds() + 10)).toJSON()

        axios.post(`${process.env.BASE_API}/admin/auction`, {
          title: 'Mustang 2020',
          desc: 'Some useful',
          currentPrice: 300000,
          price: 600000,
          startTime,
          currentTime,
          buyer: 'nobody',
          images: ['base64', 'base64']
        })
      },
      msToTime(ms) {
        let s = Math.floor(ms / 1000)
        let m = Math.floor(s / 60)
        s = s % 60
        let h = Math.floor(m / 60)
        m = m % 60

        return { s, m, h }
      },
      msToSeconds(ms) {
        return Math.floor(ms / 1000)
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
        margin: 30px
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
