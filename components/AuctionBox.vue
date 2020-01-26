<template>
  <div class="item">
    <NLink :to="`/auction/${id.replace('-', '')}`">
      <p class="title">{{auction.title}}</p>
      <img src="item/bmw.png" alt="item" />
      <p v-if="startTime > 0" class="starts-in">Початок через:</p>
      <div v-else>
        <p class="buyer">{{auction.buyer}}</p>
        <p class="timer">00:00:{{currentTime}}</p>
        <p class="price">{{auction.currentPrice}} грн</p>
      </div>
    </NLink>

    <div v-if="startTime > 0" class="btn no-btn">
      {{msToTime(startTime).h}}год {{msToTime(startTime).m}}хв {{msToTime(startTime).s}}с
    </div>
    <div v-else class="btn" @click="makeBid(id)">Підвищити ставку</div>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import axios from 'axios'

  export default {
    data() {
      return {
        currentTime: null,
        startTime: null
      }
    },
    props: {
      auction: Object,
      id: String
    },
    mounted() {
      this.updateTime()

      setInterval(() => {
        this.updateTime()
      }, 1000)
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
      updateTime() {
        this.startTime = new Date(this.auction.startTime) - new Date()

        this.currentTime = this.msToSeconds(
          new Date(this.auction.currentTime) - new Date() > 0 ? new Date(this.auction.currentTime) - new Date() : 0
        )
        this.currentTime = this.currentTime < 10 ? '0' + this.currentTime : this.currentTime
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