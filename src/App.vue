<script setup lang="ts">
  import HeaderBar from './components/shared/HeaderBar.vue'
  import FooterBar from './components/shared/FooterBar.vue'
</script>

<template>
  <v-app>
    <HeaderBar />
    <v-main>
      <router-view />
    </v-main>
    <FooterBar />
  </v-app>
</template>
