<template>
  <section>
    <div class="main">
      <h1>Все для вашої мрії</h1>
      <NLink class="btn" to="/auth/sign-in">change to reg</NLink>
    </div>
  </section>
</template>

<script>
import AppNavigation from "~/components/main/AppNavigation";
export default {
  methods: {
    openAccount() {
      this.$router.push("");
    }
  }
};
</script>

<style lang="sass" scoped>
  @import '~/assets/variables.sass'

  .main
    display: flex
    justify-content: flex-start
    flex-direction: column
    margin-left: 200px

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
    font-size: 55px
    letter-spacing: 10px

  a
    color: #fff
    margin-left: 25px

  section
    height: 100vh
</style>
