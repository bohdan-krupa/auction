<template>
  <section class="profile-container">
    <h2>Мій профіль</h2>

    <div class="profile">
      <div class="profile-top">
        <div class="info-path">
          <p class="data-item">Email: jerrylite219@gmail.com</p>
          <p class="data-item">Дата реєстрації: {{createDate}}</p>
          <p class="data-item">Баланс: 300 грн</p>
          <div class="data-item btn">Поповнити баланс</div>
          <div class="data-item btn">Змінити пароль</div>
        </div>

        <img src="img/ava.jpg" alt="Avatar">
      </div>
    </div>
  </section>
</template>

<script>
  import firebase from 'firebase'
  import moment from 'moment'

  export default {
    data() {
      return {
        createDate: null
      }
    },
    mounted() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          const datetime = new Date(user.metadata.creationTime)
          this.createDate = moment(datetime).format('YYYY.MM.DD')
        } else {
          this.$router.replace('/auth/sign-in')
        }
      })
    }
  }
</script>

<style lang="sass" scoped>
  h2
    text-align: center
    font-family: 'Alata', sans-serif
    letter-spacing: 5px
    font-size: 30px
    text-transform: uppercase
    margin-top: 20px
    color: #555

  .profile
    width: 800px
    height: 600px
    margin: 0 auto
    // background: grey

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
</style>