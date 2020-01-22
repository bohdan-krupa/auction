<template>
  <div>
    <section class="top">
      <h1>Don't fuck yourself</h1>
    </section>

    <section class="auctions-container">
      <h2>Поточні аукціони</h2>

      <div class="auctions">
        <div class="item">
          <NLink to="/auction/Ldfk3457bhjw">
            <p class="title">BMW 530D</p>
            <img src="item/bmw.png" alt="item" />
            <p class="buyer">mr.Robot</p>
            <p class="timer">00:00:10</p>
            <p class="price">20000 грн</p>
          </NLink>
          <div class="btn" @click="makeBid()">Підвищити ставку</div>
        </div>

        <div class="item">
          <NLink to="/auction/Ldfk3457bhjw">
            <p class="title">BMW 530D</p>
            <img src="item/bmw.png" alt="item" />
            <p class="starts-in">Початок через:</p>
          </NLink>
          <div class="btn no-btn">7год 14хв 20с</div>
        </div>

        <div class="item">
          <NLink to="/auction/Ldfk3457bhjw">
            <p class="title">BMW 530D</p>
            <img src="item/bmw.png" alt="item" />
            <p class="buyer">mr.Robot</p>
            <p class="timer">00:00:10</p>
            <p class="price">20000 грн</p>
          </NLink>
          <div class="btn" @click="makeBid()">Підвищити ставку</div>
        </div>

        <div class="item">
          <NLink to="/auction/Ldfk3457bhjw">
            <p class="title">BMW 530D</p>
            <img src="item/bmw.png" alt="item" />
            <p class="starts-in">Початок через:</p>
          </NLink>
          <div class="btn no-btn">7год 14хв 20с</div>
        </div>

        <div class="item">
          <NLink to="/auction/Ldfk3457bhjw">
            <p class="title">BMW 530D</p>
            <img src="item/bmw.png" alt="item" />
            <p class="buyer">mr.Robot</p>
            <p class="timer">00:00:10</p>
            <p class="price">20000 грн</p>
          </NLink>
          <div class="btn" @click="makeBid()">Підвищити ставку</div>
        </div>

        <div class="item">
          <NLink to="/auction/Ldfk3457bhjw">
            <p class="title">BMW 530D</p>
            <img src="item/bmw.png" alt="item" />
            <p class="starts-in">Початок через:</p>
          </NLink>
          <div class="btn no-btn">7год 14хв 20с</div>
        </div>

        <div class="item">
          <NLink to="/auction/Ldfk3457bhjw">
            <p class="title">BMW 530D</p>
            <img src="item/bmw.png" alt="item" />
            <p class="buyer">mr.Robot</p>
            <p class="timer">00:00:10</p>
            <p class="price">20000 грн</p>
          </NLink>
          <div class="btn" @click="makeBid()">Підвищити ставку</div>
        </div>

        <div class="item">
          <NLink to="/auction/Ldfk3457bhjw">
            <p class="title">BMW 530D</p>
            <img src="item/bmw.png" alt="item" />
            <p class="starts-in">Початок через:</p>
          </NLink>
          <div class="btn no-btn">7год 14хв 20с</div>
        </div>

        <div class="item">
          <NLink to="/auction/Ldfk3457bhjw">
            <p class="title">BMW 530D</p>
            <img src="item/bmw.png" alt="item" />
            <p class="buyer">mr.Robot</p>
            <p class="timer">00:00:10</p>
            <p class="price">20000 грн</p>
          </NLink>
          <div class="btn" @click="makeBid()">Підвищити ставку</div>
        </div>

        <div class="item">
          <NLink to="/auction/Ldfk3457bhjw">
            <p class="title">BMW 530D</p>
            <img src="item/bmw.png" alt="item" />
            <p class="starts-in">Початок через:</p>
          </NLink>
          <div class="btn no-btn">7год 14хв 20с</div>
        </div>

        <div class="item">
          <NLink to="/auction/Ldfk3457bhjw">
            <p class="title">BMW 530D</p>
            <img src="item/bmw.png" alt="item" />
            <p class="buyer">mr.Robot</p>
            <p class="timer">00:00:10</p>
            <p class="price">20000 грн</p>
          </NLink>
          <div class="btn" @click="makeBid()">Підвищити ставку</div>
        </div>

        <div class="item">
          <NLink to="/auction/Ldfk3457bhjw">
            <p class="title">BMW 530D</p>
            <img src="item/bmw.png" alt="item" />
            <p class="starts-in">Початок через:</p>
          </NLink>
          <div class="btn no-btn">7год 14хв 20с</div>
        </div>

        <div class="item">
          <NLink to="/auction/Ldfk3457bhjw">
            <p class="title">BMW 530D</p>
            <img src="item/bmw.png" alt="item" />
            <p class="buyer">mr.Robot</p>
            <p class="timer">00:00:10</p>
            <p class="price">20000 грн</p>
          </NLink>
          <div class="btn" @click="makeBid()">Підвищити ставку</div>
        </div>

        <div class="item">
          <NLink to="/auction/Ldfk3457bhjw">
            <p class="title">BMW 530D</p>
            <img src="item/bmw.png" alt="item" />
            <p class="starts-in">Початок через:</p>
          </NLink>
          <div class="btn no-btn">7год 14хв 20с</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    makeBid() {
      console.log("some magic");
    }
  }
};
</script>

<style lang="sass" scoped>
  @import '~/assets/variables.sass'
  @import url('https://fonts.googleapis.com/css?family=Gelasio&display=swap')

  .top
    display: flex
    justify-content: center
    align-items: center
    background-image: url(/img/bg.jpg)
    background-position: center
    height: 100vh
    background-size: cover
    text-align: center
    margin-top: -100px
    
    h1
      text-align: center
      font-size: 42px
      letter-spacing: 5px
      color: #FFF
      text-transform: uppercase
      text-shadow: 0 0 30px #000
    
  .auctions-container
    text-align: center
    height: 100vh

    h2
      font-family: 'Alata', sans-serif
      letter-spacing: 5px
      font-size: 30px
      text-transform: uppercase
      padding-top: 50px
      color: #555

    .auctions
      display: flex
      justify-content: center
      align-items: center
      flex-flow: wrap
      margin-top: 50px
      
      .item
        display: flex
        flex-flow: column
        align-items: center
        width: 240px
        height: 320px
        margin: 15px
        background: #DDD
        border-radius: 30px
        box-shadow: 0 0 20px #555
        transition: all 200ms

        &:hover
          transform: scale(1.05)

        .title
          margin-top: 10px
          font-size: 18px
          font-weight: bold
          color: #333

        img
          height: 120px

        .buyer, .timer
          font-size: 17px
          line-height: 25px
          color: #333

        .timer
          font-weight: bold

        .price, .starts-in
          font-size: 20px
          font-weight: bold
          color: #333
          letter-spacing: 1px

        .starts-in
          margin-top: 48px

        .btn
          width: 180px
          margin: auto 0 30px 0
          padding: 10px
          background: #555
          color: #FFF
          border-radius: 10px
          font-size: 18px
          letter-spacing: 1px
          user-select: none
          cursor: pointer

          &.no-btn
            user-select: text
            cursor: text
</style>
