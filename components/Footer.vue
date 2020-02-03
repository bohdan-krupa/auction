<template>
  <footer>
    <div class="contact">
      <div class="contact-overlay">
        <img src="img/contact.svg" alt="Contact">
        <span> +380982911333</span>  
      </div>
      <div class="mail-overlay">
        <img src="img/mail.svg" alt="Email">
        <span>droshiping.happy@gmail.com</span>
      </div>

    </div>
    <div class="copyright">
      <span>© AucFine 2020</span>
    </div>
  </footer>
</template>

<style lang="sass" scoped>
  footer
    width: 100%
    height: 15  0px
    margin-top: 80px
    background-color:  #555
    
    img
      width: 25px
      margin-right: 15px

    h3
      text-align: center
      line-height: 150px
      color: #999
      font-size: 50px
      letter-spacing: 20px
    
    .contact
      padding-top: 50px
      display: flex
      flex-flow: wrap column
      align-items: center
      
      .contact-overlay
        display: flex
        justify-content: center
        align-items: center
      span
        font-size: 20px 
        margin-bottom: 10px

      .mail-overlay
        display: flex
        align-items: center
        justify-content: center
    
    .copyright
      display: flex
      justify-content: center
      font-size: 20px      
</style>