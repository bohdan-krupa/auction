<template>
  <section>
    <div>
      <div class="container">
        <div class="account"></div>
        <label>Ведіть ваш логін</label>
        <input type="email" placeholder=" email або номер телефону" />

        <label>Ведіть свій пароль</label>
        <input type="password" placeholder=" Не менше 6 знаків" />

        <div class="btn">
          <NLink to="/">Увійти</NLink>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AppNavigation from "~/components/main/AppNavigation";
export default {
  layout: "sign",
  components: {
    AppNavigation
  }
};
</script>

<style lang="sass" scoped>
@import '~/assets/variables.sass'

div
  display: flex
  justify-content: center

.account
  width: 50px
  height: 50px
  border-radius: 100%
  background-color: #fff
  margin-bottom: 20px

.container
  width: 350px
  height: 450px
  background-color: grey
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
  border:  solid $main-background
  padding: 8px
a
  text-decoration: none
  font-size: 20px
  color: #000

.btn
  width: 100px
  height: 30px
  border-radius: 10px







</style>