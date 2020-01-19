<template>
  <div>
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



  h1
    margin-top: 150px
    text-align: center
    font-size: 42px
    letter-spacing: 5px
    color: #333
    
  .main-item
    text-align: center
    height: 100vh
    background: #b3c2c9
    margin-top: 500px

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
      outline: 1px solid #999

      img
        width: 180px
      
  


</style>
