<template>
<section>
    <div class="component">
      <AppNavigation />
      <nuxt />
    </div>
    <div class="main">
      <h1>Все для вашої мрії</h1>
      <div class="btn">
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
  }
};
</script>
<style scoped>
.main {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 200px;
}
.btn {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100px;
  height: 50px;
  background: grey;
  border-radius: 10px;
}
h1 {
  font-size: 55px;
  letter-spacing: 10px;
}
a {
  text-decoration: none;
  color: #fff;
  margin-left: 25px;
}
section {
  height: 100vh;
  background: #f1f1f1;
}
</style>
