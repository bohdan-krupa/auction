<template>
  <section>
    <div class="main">
      <h1>Lorem ipsum dolor sit amet</h1>
    </div>
  </section>
</template>

<script>
import AppNavigation from "~/components/main/AppNavigation";
export default {
  methods: {

  }
};
</script>

<style lang="sass" scoped>
  @import '~/assets/variables.sass'

  .main
    display: flex
    justify-content: flex-start
    flex-direction: column

  .btn
    display: flex
    align-items: center
    flex-direction: row
    width: 100px
    height: 50px
    background: grey
    border-radius: 10px
    margin-top: 20px

  h1
    margin-top: 150px
    text-align: center
    font-size: 55px
    letter-spacing: 5px
    color: #333

  a
    color: #fff
    margin-left: 25px

  section
    height: 100vh
</style>
