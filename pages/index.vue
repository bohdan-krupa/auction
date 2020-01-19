<template>
  <div>
    <div class="cover"></div>
    <section class="top">
      <h1>Lorem ipsum dolor sit amet</h1>
    </section>
    <section class="main-item">
      <h2>Аукціон</h2>
      <div class="container-item">
        <div class="item">
          <img src="item/bmw.png" alt="item" />
        </div>
        <div class="item">
          <img src="item/bmw.png" alt="item" />
        </div>
        <div class="item">
          <img src="item/bmw.png" alt="item" />
        </div>
        <div class="item">
          <img src="item/bmw.png" alt="item" />
        </div>
        <div class="item">
          <img src="item/bmw.png" alt="item" />
        </div>
        <div class="item">
          <img src="item/bmw.png" alt="item" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppNavigation from "~/components/main/AppNavigation";
export default {
  methods: {}
};
</script>

<style lang="sass" scoped>
  @import '~/assets/variables.sass'
  @import url('https://fonts.googleapis.com/css?family=Gelasio&display=swap')

  .top
    background-image: url(/img/background.png)
    width: 100 vw
    height: 100vh
    background-position: 100%
    background-size: cover
    text-align: center
    

  h1
    text-align: center
    font-size: 42px
    letter-spacing: 5px
    color: #fff
    padding-top: 100px
    text-transform: uppercase
    
  .main-item
    text-align: center
    height: 100vh
    background-color: $hover-button

    h2
      font-family: 'Alata', sans-serif
      letter-spacing: 5px
      font-size: 40px
      text-transform: uppercase

    .container-item
      display: flex
      justify-content: center
      margin-top: 20px


    .item
      margin-right: 20px
      height: 200px
      background: #999
      border-radius: 30px

      img
        width: 180px
      
  


</style>
