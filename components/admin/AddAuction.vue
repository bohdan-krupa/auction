<template>
  <div class="container">
    <div class="input-group">
      <p>Назва:</p>
      <input v-model="name" type="text">
    </div>

    <div class="input-group">
      <p>Початкова ціна (грн):</p>
      <input v-model="startPrice" type="number">
    </div>

    <div class="input-group">
      <p>Ціна (грн):</p>
      <input v-model="price" type="number">
    </div>

    <div class="input-group">
      <p>Початок:</p>
      <input v-model="startTime" type="datetime-local">
    </div>

    <div class="desc">
      <p>Опис:</p>
      <textarea v-model="desc"></textarea>
    </div>

    <div class="photos-container">
      <label for="upload-photos" class="btn">Додати фотографії</label>
      <input @change="e => uploadPhotos(e.target.files)" id="upload-photos" type="file" multiple accept="image/*">

      <div class="photos">
        <img v-for="(photo, index) in photos" :key="index" :src="fileToURL(photo)" alt="Auction photo">
      </div>
    </div>

    <div @click="addAuction()" class="btn">Додати аукціон</div>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import axios from 'axios'

  export default {
    data() {
      return {
        name: null,
        startPrice: 0,
        price: 0,
        startTime: null,
        desc: null,
        photos: null,
        photosBase64: null
      }
    },
    methods: {
      addAuction: async function() {
        if(this.name && this.startPrice && this.price && this.startTime && this.desc && this.photosBase64.length) {
          const token = await firebase.auth().currentUser.getIdToken(true)

          let currentTime = new Date(this.startTime)
          currentTime.setSeconds(currentTime.getSeconds() + 10)
          currentTime = currentTime.toJSON()

          axios.post(`${process.env.BASE_API}/admin/auction`, {
            title: this.name,
            currentPrice: this.startPrice,
            price: this.price,
            startTime: this.startTime,
            currentTime,
            desc: this.desc,
            images: this.photosBase64,
            buyer: 'NOBODY'
          }, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }).then(res => {
            Toastify({
              text: res.data
            }).showToast()

            if (res.data) {
              this.name = null
              this.startPrice = 0
              this.price = 0
              this.startTime = null
              this.desc = null
              this.photos = null
              this.photosBase64 = null
            }
          })
        } else {
          Toastify({
            text: 'Не все заповнено'
          }).showToast()
        }
      },
      uploadPhotos: async function(files) {
        this.photos = files

        this.toBase64(files)

        console.log(this.photosBase64)
      },
      fileToURL(file) {
        return URL.createObjectURL(file)
      },
      toBase64(files) {
        if (files) {
          let base64Arr = []

          for (let i = 0; i < files.length; i++) {
            const reader = new FileReader()
            reader.readAsDataURL(files[i])
            reader.onload = () => {
              const file = reader.result;
              if (reader.result) {
                base64Arr.push(this.split64(file))
              }
            }
          }

          this.photosBase64 = base64Arr
        }
      },
      split64(base64) {
        return base64.split('base64,')[1]
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '~/assets/variables.sass'
  @import '~/assets/admin.sass'

  .input-group
    display: flex
    justify-content: space-between
    width: 500px
    margin: 5px 0

    input
      width: 180px
      height: 35px
      padding: 5px 10px
      border: none
      border-radius: 20px
      outline: none
      font-size: 16px
      color: #333

      &[type=number]
        width: 100px

      &[type=datetime-local]
        width: 250px

  .desc
    margin-top: 40px

    textarea
      width: 500px
      height: 150px
      margin-top: 10px
      resize: none
      outline: none
      border: none
      padding: 20px
      border-radius: 20px
      font-size: 16px
      color: #333

  .photos-container
    .btn
      display: block
      width: 500px
      margin: 10px 0 30px 0

    input
      display: none

    .photos
      display: flex
      justify-content: center

      img
        width: 100px
        height: 100px
        margin: 10px
        object-fit: contain
        border-radius: 20px
</style>