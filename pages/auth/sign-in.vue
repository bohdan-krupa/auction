<template>
  <section>
    <div>
      <div class="container">
        <h2>Вхід</h2>
        <label>Email:</label>
        <input v-model="email" type="email" placeholder="Email" />

        <label>Пароль:</label>
        <input v-model="password" type="password" placeholder="Не менше 6 знаків" />

        <div @click="toSignIn" class="btn">Увійти</div>

        <div class="sign-up">
          <p>Не зареєстровані?</p>
          <NLink to="/auth/sign-up">Створити акаунт</NLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import firebase from 'firebase'

  export default {
    data() {
      return {
        email: null,
        password: null
      }
    },
    mounted() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.$router.replace('/')
        }
      })
    },
    methods: {
      toSignIn() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(error => {
          console.log(error)
        })
      }
    },
    props: {
      logged: Number
    }
  }
</script>

<style lang="sass" scoped>
  @import '~/assets/variables.sass'

  div
    display: flex
    justify-content: center

  .container
    width: 350px
    background-color: $grey-1
    box-shadow: 0 0 50px #555
    border: 1px solid #999
    display: flex
    align-items: center
    flex-direction: column
    margin-top: 80px
    padding: 40px 0
    border-radius: 30px
    box-sizing: border-box

  input
    margin-bottom: 20px
    outline: none
    height: 30px
    width: 220px
    border-radius: 10px
    border: solid $main-background
    padding: 8px

  .btn
    width: 150px
    line-height: 40px
    font-size: 20px
    border-radius: 30px
    // border: 1px solid black
    margin-top: 5px
    color: #FFF
    cursor: pointer
    transition: 100ms all
    background: #555

    &:hover
      background: #999

  h2
    font-size: 25px
    margin-bottom: 25px
    text-transform: uppercase
    color: #444
    letter-spacing: 1px
  
  label
    font-size: 20px
    margin: 10px
    color: #333

  .sign-up
    display: flex
    flex-flow: column
    align-items: center
    margin-top: 50px
    
    p
      font-size: 18px
      color: #f1f1f1
    a
      color: #333
      font-size: 19px

      &:hover
        text-decoration: underline

  input:focus
    box-shadow: 0 0 5px rgba(81, 203, 238, 1)
    border: 1px solid rgba(81, 203, 238, 1)
    -webkit-transition: all 0.30s ease-in-out
    -moz-transition: all 0.30s ease-in-out
    -ms-transition: all 0.30s ease-in-out
    -o-transition: all 0.30s ease-in-out
    outline: none
    border: 1px solid #DDDDDD


</style>


