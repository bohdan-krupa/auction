<template>
  <div>
    <div class="container">
      <h2>Регістрація</h2>
      <label>Створіть свій нік-нейм:</label>
      <input type="text" placeholder=" нік-нейм" />

      <label>Ведіть свій mail:</label>
      <input type="email" placeholder="Ведіть свій Email" />

      <label>Пароль:</label>
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
div
  display: flex
  justify-content: center

.container
  width: 350px
  flex-flow: column wrap
  align-items: center
  margin-top: 80px
  box-shadow: 0 0 50px #555
  border: 1px solid #999
  background-color: $grey-1
  border-radius: 30px
  padding: 40px 0
  
  label
    font-size: 20px
    margin: 10px
    color: $text-color

  h2
    font-size: 25px
    margin-bottom: 15px
    color: $text-color
</style>
