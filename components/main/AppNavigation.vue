<template>
  <div>
    <nav>
      <div class="logo">
        <img src="img/icons8-рукопожатие-100.png" alt="Logo" />
        <span>AucFine</span>
      </div>

      <div class="navigation">
        <li>Головна</li>
        <li>Баланс</li>
        <li>Увійти</li>
      </div>
    </nav>
  </div>
</template>

<style lang="sass">
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap")
@import '~/assets/variables.sass'
*
  margin: 0px
  padding: 0px
nav
  display: flex
  justify-content: space-between
  padding: 20px
  align-items: center

.navigation
  display: flex
  margin-right: 25px
  flex-flow: wrap

li
  margin-right: 25px
  list-style: none
  font-size: 22px
  font-family: "Roboto"
  letter-spacing: 10px

.logo
  display: flex
  font-family: "Roboto"
  font-size: 50px

img
  width: 80px

span
  margin-left: 20px
  margin-top: 10px

</style>
