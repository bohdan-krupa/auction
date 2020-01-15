<template>
  <section>
    <div>
      <div class="container">
        <span>Sign in</span>
        <label>Ведіть свій логін</label>
        <input type="email" placeholder="Email або номер телефону" />

        <label>Ведіть свій пароль</label>
        <input type="password" placeholder="Не менше 6 знаків" />

        <div class="btn">Увійти</div>

        <div class="router-register">
          <span>Не зареєстровані?</span>
          <a @click="router">Створити акаунт</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    router() {
      this.$router.replace("/auth/sign-up");
    }
  }
};
</script>

<style lang="sass" scoped>
  @import '~/assets/variables.sass'

  div
    display: flex
    justify-content: center



  .container
    width: 350px
    height: 450px
    background-color: $grey-1
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    margin-top: 100px
    border-radius: 10px
    box-sizing: border-box

  input
    margin-bottom: 20px
    outline: none
    height: 30px
    width: 250px
    border-radius: 10px
    border: solid $main-background
    padding: 8px
  a
    text-decoration: none
    font-size: 20px
    color: #fff

  .btn
    width: 150px
    height: 50px
    font-size: 30px
    border-radius: 30px
    color: black
    border: 1px solid black
    margin-top: 5px
    cursor: pointer

  span
    font-size: 30px
    margin-bottom: 25px
  
  
  label
    font-size: 20px
    margin: 10px


  .router-register
    margin-top: 10px
    
    span
      font-size: 20px 
      margin-right: 5px 

    a
      color: #f1f1f1
    a:hover
        text-decoration: underline

  input:focus
    box-shadow: 0 0 5px rgba(81, 203, 238, 1)
    border: 1px solid rgba(81, 203, 238, 1)
    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
    -ms-transition: all 0.30s ease-in-out;
    -o-transition: all 0.30s ease-in-out;
    outline: none;
    border: 1px solid #DDDDDD;


</style>


