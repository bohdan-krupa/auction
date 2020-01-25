<template>
  <div class="product">
    <div class="info">
      <h1>{{auction.title}}</h1>
      <div v-if="isStarted" class="current-data">
        <div class="timer">00:00:10</div>
        <div class="buyer">mr.Robot</div>
      </div>
      <p
        class="desc"
      >{{auction.desc}}</p>
      <div v-if="!isStarted" class="starts-in-container">
        <p class="starts-in">Початок через:</p>
        <div class="btn no-btn">7год 14хв 20с</div>
      </div>
      <div v-if="isStarted" class="price-container">
        <p class="price">Ціна: 100 грн</p>
        <div class="btn">Підняти ставку</div>
      </div>
      <div class="btn buy-it-now">Купити зараз за 34000 грн</div>
    </div>

    <div class="views">
      <img class="main-img" :src="mainPhoto" alt="main" />

      <div class="other-img">
        <img
          v-for="(photo, index) in otherPhotos"
          :key="index"
          :src="photo"
          alt="Auction photo"
          @click="changePhoto(photo)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      isStarted: true,
      mainPhoto: "img/mac-1.png",
      otherPhotos: ["img/mac-2.png", "img/mac-1.png", "img/mac-3.png"],
      auction: {}
    };
  },
  methods: {
    changePhoto(photo) {
      this.mainPhoto = photo;
    },
  },
  mounted() {
    axios.get(`${process.env.BASE_API}/auction?id=${this.$route.params.id}`)
    .then(res => {
      this.auction = res.data
      this.isStarted = res.data.startTime <= 0
    })
    .catch(err => {
      console.error(err)
    })
  }
};
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap')

.product
  display: flex
  justify-content: center
  margin-top: 50px

  .info
    width: 500px
    margin-right: 50px
    
    h1
      font-size: 35px
      font-family: 'Source Sans Pro', sans-serif
      letter-spacing: 2px

    .current-data
      display: flex
      justify-content: space-between
      align-items: center

      .timer
        font-size: 30px
        color: red
        letter-spacing: 5px

      .buyer
        margin-left: 20px
        font-size: 18px
    
    .desc
      margin-top: 15px
      font-size: 17px
      color: #333

    .starts-in-container, .price-container
      display: flex
      justify-content: space-between
      align-items: center
      width: 350px
      margin: 50px 0

    .price, .starts-in
      font-size: 20px
      font-weight: bold
      color: #333
      letter-spacing: 1px
    
    .btn
      width: 180px
      text-align: center
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

      &.buy-it-now
        width: 350px

  .main-img
    height: 400px
    width: 400px
    object-fit: cover

  .other-img
    display: flex
    justify-content: center

    img
      width: 80px
      height: 80px
      margin: 15px
      border: 1px solid #999
      padding: 8px
      object-fit: cover 
      cursor: pointer
</style>