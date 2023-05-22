<template>
  <div class="container">
    <NavBar></NavBar>
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar },
};
</script>

<style>
body {
  background: rgb(0, 64, 80) !important;
}
</style>
