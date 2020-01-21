<template>
  <div class="product">
    <div class="slider-img">
      <div class="main-img">
        <img src="img/mac-1.png" alt="main" />
      </div>
      <div class="other-img">
        <img src="img/mac-2.png" alt="photo" />
        <img src="img/mac-2.png" alt="photo" />
        <img src="img/mac-1.png" alt="photo" />
      </div>
    </div>
    <div class="item-data">
      <h3>MacBook Pro</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae aperiam magnam reprehenderit, aut nam amet ipsa voluptatem eius quam non molestias consequatur, hic velit, officia perferendis! Ea, consequuntur laudantium?</p>
      <span>
        Time:
        <br />12h 13m 42s
      </span>
      <span>Price: 100 грн</span>
      <div class="btn">Підняти ставку</div>
    </div>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return !isNaN(params.id);
  }
};
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap')


.product
  display: flex
  flex-wrap: wrap
  padding-top: 180px
  height: 100vh

  .main-img
    margin: 0px 50px 0px 100px
    img
      height: 350px
      width: 350px
      outline: 1px solid #f1f1f1
      padding: 20px
    
  .item-data
    display: flex
    flex-flow: wrap column
    
    h3
      font-size: 35px
      font-family: 'Source Sans Pro', sans-serif
      letter-spacing: 2px
    
    p
      font-size: 15px
      width: 350px
    
    span
      font-size: 30px
      font-weight: bold
      color: #d9ff7d
      margin-top: 10px
    
    .btn
      display: flex
      align-items: center
      padding: 10px
      width: 150px
      height: 50px
      text-align: center
      margin-top: 20px
      font-size: 20px
      font-weight: bold
      border-radius: 20px
      background-color: #3ab734
    
.other-img
  img
    width: 130px
    height: 130px
    margin-left: 50px
    margin-top: 25px
    outline: 1px solid #fff 
    padding: 20px 
    
  
  
</style>