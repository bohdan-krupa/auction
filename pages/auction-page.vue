<template>
  <div class="main-page">
    <div class="product">
      <div class="main-img">
        <img src="img/mac-1.png" alt="main" />
      </div>
      <div class="item-data">
        <h3>MacBook Pro</h3>
        <i>#312311</i>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae aperiam magnam reprehenderit, aut nam amet ipsa voluptatem eius quam non molestias consequatur, hic velit, officia perferendis! Ea, consequuntur laudantium?</p>
        <span>Price: 100 грн</span>
      </div>
      <div class="other-img">
        <img src="static/img/mac-2.png" alt="photo" />
        <img src="static/img/mac-2.png" alt="photo" />
        <img src="static/img/mac-1.png" alt="photo" />
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap')


.main-page
  height: 100vh
  background: #999
  margin-top: -100px
.product
  display: flex
  padding-top: 180px

  .main-img
    margin: 0px 50px 0px 100px
    img
      height: 350px
      width: 350px
      outline: 1px solid #f1f1f1
    
  .item-data
    width: 450px
    
    h3
      font-size: 35px
      font-family: 'Source Sans Pro', sans-serif
      letter-spacing: 2px
    
    p
      font-size: 15px
    
  
  
</style>