<template>
  <header>
    <nav>
      <div class="logo">
        <img src="img/icons8-рукопожатие-100.png" alt="Logo" />
        <span>AucFine</span>
      </div>
      <div class="burger-menu">
        <div class="navigation">
          <li>
            <nuxt-link to="/">Головна</nuxt-link>
          </li>
          <li>Баланс</li>
          <li>Увійти</li>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="sass" scoped>
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap")
  @import '~/assets/variables.sass'

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
  
  a
    text-decoration: none
    color: #000


  @media screen and (max-width: 875px)
    .navigation
      display: flex
      flex-flow: column

    img
      width: 50px
      height: 50px
    
    span
      font-size: 30px



  @media screen and (max-width: 415px)
    .burger-menu
      width: 50px
      height: 50px
      box-sizing: border-box
      overflow: hidden
</style>
