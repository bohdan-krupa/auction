<template>
  <footer>
      <a href="mailto:team-a@gmail.com">team-a@gmail.com</a>

      <div class="copyright">© AucFine 2019 - {{year}}</div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        year: new Date().getFullYear()
      }
    }
  }
</script>

<style lang="sass" scoped>
  footer
    width: 100%
    margin-top: 80px
    text-align: center
    line-height: 25px
    margin: 80px 0 30px 0
    
    a
      color: #333
      font-size: 18px

    .copyright
      color: #555
      font-size: 19px
</style>