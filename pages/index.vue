<template>
  <section>
    <div class="component">
      <AppNavigation />
    </div>
    <div class="main">
      <h1>Все для вашої мрії</h1>
      <div class="btn" @click="OpenAccount">
        <nuxt-link to="/">Увійти</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import AppNavigation from "~/components/main/AppNavigation";
export default {
  layout: "default",
  components: {
    AppNavigation
  },
  methods: {
    OpenAccount: function() {
      this.$router.push("/auth/sign-in");
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


h1
  font-size: 55px
  letter-spacing: 10px

a
  text-decoration: none
  color: #fff
  margin-left: 25px

section
  height: 100vh
  background: 
</style>
