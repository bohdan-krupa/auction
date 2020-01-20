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
          <div class="text-sales">
            <span>Bmw 530d</span>
            <p>20000$</p>
          </div>
          <img src="item/bmw.png" alt="item" />
          <div class="btn">
            <NLink to="/">Участь</NLink>
          </div>
        </div>
        <div class="item">
          <div class="text-sales">
            <span>Bmw 530d</span>
            <p>20000$</p>
          </div>
          <img src="item/bmw.png" alt="item" />
          <div class="btn">
            <NLink to="/">Участь</NLink>
          </div>
        </div>
        <div class="item">
          <div class="text-sales">
            <span>Bmw 530d</span>
            <p>20000$</p>
          </div>
          <img src="item/bmw.png" alt="item" />
          <div class="btn">
            <NLink to="/">Участь</NLink>
          </div>
        </div>
        <div class="item">
          <div class="text-sales">
            <span>Bmw 530d</span>
            <p>20000$</p>
          </div>
          <img src="item/bmw.png" alt="item" />
          <div class="btn">
            <NLink to="/">Участь</NLink>
          </div>
        </div>
        <div class="item">
          <div class="text-sales">
            <span>Bmw 530d</span>
            <p>20000$</p>
          </div>
          <img src="item/bmw.png" alt="item" />
          <div class="btn">
            <NLink to="/">Участь</NLink>
          </div>
        </div>
        <div class="item">
          <div class="text-sales">
            <span>Bmw 530d</span>
            <p>20000$</p>
          </div>
          <img src="item/bmw.png" alt="item" />
          <div class="btn">
            <NLink to="/">Участь</NLink>
          </div>
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
    height: 100vh
    background-position: 100%
    background-size: cover
    text-align: center
    margin-top: -100px
    

  h1
    text-align: center
    font-size: 42px
    letter-spacing: 5px
    color: #666
    text-decoration: underline
    padding-top: 250px
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
      display: flex
      flex-flow: wrap column
      align-items: center
      margin-right: 30px
      width: 180px
      background: #999
      border-radius: 30px

      img
        width: 180px
    
    .text-sales
      display: flex
      flex-flow: wrap column
      align-items: flex-start
      margin-left: 20px

      span
        font-size: 20px
        font-weight: bold

      p
        color: #f1f1f1
        margin-left: 25px
        font-size: 20px

    .btn
      display: flex
      align-items: center
      justify-content: center
      width: 90px
      height: 40px
      margin-bottom: 20px
      border-radius: 10px
      text-align: center
      background-color: #888

      a
        font-size: 20px
        font-weight: bold
      
  


</style>
