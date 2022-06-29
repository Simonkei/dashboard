<template>
  <v-app>
    <Header />
    <drawer />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from "../src/components/layout/Header.vue";
import Drawer from "../src/components/layout/Drawer.vue";
export default {
  components: {
    Header,
    Drawer,
  },
};
</script>

<style>
html {
  background-color: rgb(245, 246, 250);
}
.theme--light.v-application {
  background: none !important;
}
</style>
