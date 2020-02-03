<template>
  <div class="container">
    <div class="input-group">
      <p>Назва:</p>
      <input type="text">
    </div>

    <div class="input-group">
      <p>Початкова ціна:</p>
      <input type="text">
    </div>

    <div class="input-group">
      <p>Ціна:</p>
      <input type="text">
    </div>

    <div class="desc">
      <p>Опис:</p>
      <textarea></textarea>
    </div>

    <div class="photos-container">
      <input type="file" multiple accept="image/*">

      <div class="photos">
        <img v-for="(photo, index) in photos" :key="index" :src="photo" alt="Auction photo">
      </div>
    </div>

    <div class="btn">Додати аукціон</div>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import axios from 'axios'

  export default {
    data() {
      return {
      }
    },
    methods: {

    }
  }
</script>

<style lang="sass" scoped>
  @import '~/assets/variables.sass'
  @import '~/assets/admin.sass'
</style>