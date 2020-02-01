<template>
  <div class="container">
    <div class="btn">Додати аукціон</div>

    <div class="list">
      <div class="row">
        <div class="col title">Назва</div>
        <div class="col title">Ціна</div>
        <div class="col title">Початкова ціна</div>
        <div class="col title">Статус</div>
        <div class="col title">Опції</div>
      </div>

      <div v-for="(auction, index) in auctions" :key="index" class="row">
        <div class="col">{{auction.title}}</div>
        <div class="col">{{auction.price}}</div>
        <div class="col">{{auction.currentPrice}}</div>
        <div class="col">{{getStatus(auction.startTime, auction.currentTime)}}</div>
        <div class="col options">
          <img src="img/edit.svg" alt="Edit">
          <img @click="deleteAuction(index)" src="img/bin.svg" alt="Delete">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import axios from 'axios'

  export default {
    data() {
      return {
        auctions: null
      }
    },
    mounted() {
      firebase.database().ref('/auctions').on('value', snap => {
        this.auctions = snap.val()
      })
    },
    methods: {
      getStatus(startTime, currentTime) {
        if (new Date(startTime) - new Date() > 0) {
          return 'Не почався'
        } else if (new Date(currentTime) - new Date() > 0) {
          return 'Активний'
        } else {
          return 'Проданий'
        }
      },
      deleteAuction: async (id) => {
        const token = await firebase.auth().currentUser.getIdToken(true)

        axios.delete(`${process.env.BASE_API}/admin/auction?id=${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }).then(res => {
          console.log(res.data)
        })
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '~/assets/variables.sass'
  @import '~/assets/admin.sass'
</style>