<template>
  <section class="profile-container">
    <h1>Мій профіль</h1>

    <div class="profile">
      <div class="profile-top">
        <div class="info-path">
          <p class="data-item">Email: {{email}}</p>
          <p class="data-item">Дата реєстрації: {{createDate}}</p>
          <p class="data-item">Баланс: {{balance}} грн</p>
          <div class="data-item btn">Поповнити баланс</div>
          <div class="data-item btn">Змінити пароль</div>
        </div>

        <img src="img/ava.jpg" alt="Avatar">
      </div>

      <div class="goods-container">
        <h3 @click="speed()" class="title">Мої товари</h3>

        <div class="goods">
          <div class="item">
            <NLink to="/auction/Lkjsdf345Jbss">
              <p class="title">BMW 530D</p>
              <img src="item/bmw.png" alt="item" />
              <p class="price">20000 грн</p>
            </NLink>
            <div class="btn">Вказати доставку</div>
          </div>

          <div class="item">
            <NLink to="/auction/Lkjsdf345Jbss">
              <p class="title">BMW 530D</p>
              <img src="item/bmw.png" alt="item" />
              <p class="price">20000 грн</p>
            </NLink>
            <div class="btn no-btn">Очікуйте</div>
          </div>

          <div class="item">
            <NLink to="/auction/Lkjsdf345Jbss">
              <p class="title">BMW 530D</p>
              <img src="item/bmw.png" alt="item" />
              <p class="price">20000 грн</p>
            </NLink>
            <div class="btn">Трек номер</div>
          </div>

          <div class="item">
            <NLink to="/auction/Lkjsdf345Jbss">
              <p class="title">BMW 530D</p>
              <img src="item/bmw.png" alt="item" />
              <p class="price">20000 грн</p>
            </NLink>
            <div class="btn">Вказати доставку</div>
          </div>

          <div class="item">
            <NLink to="/auction/Lkjsdf345Jbss">
              <p class="title">BMW 530D</p>
              <img src="item/bmw.png" alt="item" />
              <p class="price">20000 грн</p>
            </NLink>
            <div class="btn no-btn">Очікуйте</div>
          </div>

          <div class="item">
            <NLink to="/auction/Lkjsdf345Jbss">
              <p class="title">BMW 530D</p>
              <img src="item/bmw.png" alt="item" />
              <p class="price">20000 грн</p>
            </NLink>
            <div class="btn">Трек номер</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import firebase from 'firebase'
  import moment from 'moment'
  import axios from 'axios'

  export default {
    data() {
      return {
        email: null,
        createDate: null,
        balance: 0
      }
    },
    methods: {
      speed() {
        console.log('ass')
        axios.get(`${process.env.BASE_API}/change`).then(res => {
          console.log(res.data)
        })
      }
    },
    mounted() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          const datetime = new Date(user.metadata.creationTime)
          this.createDate = moment(datetime).format('YYYY.MM.DD')
          this.email = user.email
        } else {
          this.$router.replace('/auth/sign-in')
        }
      })

      firebase.database().ref('/auctions').on('value', snap => {
        console.log("YEAH")
      })
    }
  }
</script>

<style lang="sass" scoped>
  h1, .title
    text-align: center
    font-family: 'Alata', sans-serif
    letter-spacing: 5px
    font-size: 30px
    text-transform: uppercase
    margin-top: 40px
    color: #555

    &.title
      font-size: 20px
      letter-spacing: 2px
      text-transform: none

  .profile
    width: 850px
    margin: 0 auto

    .profile-top
      display: flex
      justify-content: space-between
      align-items: center
      margin-top: 50px

      .info-path
        .data-item
          margin: 20px 0

      img
        width: 250px
        height: 250px
        object-fit: cover
        border-radius: 100%
        cursor: pointer

  .goods-container
    margin-top: 60px

    .goods
      display: flex
      flex-flow: wrap
      justify-content: space-between
      margin: 30px -30px
      
      .item
        display: flex
        flex-flow: column
        align-items: center
        width: 240px
        height: 280px
        margin: 30px
        text-align: center
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
    text-align: center
    border-radius: 10px
    font-size: 18px
    letter-spacing: 1px
    user-select: none
    cursor: pointer

    &.no-btn
      user-select: text
      cursor: text

    &.data-item
      width: 250px
</style>