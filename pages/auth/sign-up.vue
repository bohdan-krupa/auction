<template>
  <div>
    <div class="container">
      <span>Sign up</span>
      <label>Створіть свій нік-нейм</label>
      <input type="text" placeholder=" нік-нейм" />
      <label>Ведіть свій mail</label>
      <input type="email" placeholder="Ведіть свій Email" />
      <label>Пароль</label>
      <input type="password" placeholder="Придумайте пароль" />
      <label>Повторіть пароль</label>
      <input type="password" placeholder="Повторіть пароль" />
      <div class="btn">Register</div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "sign"
};
</script>

<style lang="sass" scoped>
@import '~/assets/variables.sass'
.container
  display: flex
  flex-flow: column wrap
  width: 350px
  height: 450px
  background-color: grey
  align-items: center
  border-radius: 10px
  box-sizing: border-box
  margin-top: 50px

div
  display: flex
  justify-content: center
  box-sizing: border-box

input
  margin: 10px

.btn
  width: 150px
  height: 50px
  text-align: center
  font-size: 30px
  border-radius: 30px
  border: 1px solid black
  cursor: pointer
  a
    text-decoration: none
    font-size: 20px
    color: #fff

span
  font-size: 30px

input   
  margin-bottom: 20px
  outline: none
  height: 30px
  width: 250px
  border-radius: 10px
  border: solid $main-background
  padding: 8px

input:focus
  box-shadow: 0 0 5px rgba(81, 203, 238, 1)
  border: 1px solid rgba(81, 203, 238, 1)
  -webkit-transition: all 0.30s ease-in-out;
  -moz-transition: all 0.30s ease-in-out;
  -ms-transition: all 0.30s ease-in-out;
  -o-transition: all 0.30s ease-in-out;
  border: 1px solid #DDDDDD;
</style>
