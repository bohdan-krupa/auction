<template>
  <div>
    <div class="container">
      <AppNavigation />
      <nuxt />
    </div>
    <h1>Все для вашої мрії</h1>
  </div>
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
div {
  background: black;
}
</style>
