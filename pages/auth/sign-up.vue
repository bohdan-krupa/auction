<template>
  <div>
    <div class="container">
      <label>Створіть свій нік-нейм</label>
      <input type="text" placeholder=" нік-нейм" />
      <label>Ведіть свій mail</label>
      <input type="email" placeholder="Ведіть свій Email" />
      <label>Пароль</label>
      <input type="password" placeholder="Придумайте пароль" />
      <label>Повторіть пароль</label>
      <input type="password" placeholder="Повторіть пароль" />
      <div class="btn">
        <a>Register</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "sign"
};
</script>

<style lang="sass" scoped>
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
  width: 100px
  height: 30px
  border-radius: 10px
  background-color: black
  a
    text-decoration: none
    font-size: 20px
    color: #fff


</style>
