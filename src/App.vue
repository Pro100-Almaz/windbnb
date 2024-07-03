<script setup lang="ts">
import Header from "./components/Header.vue";
window.Telegram.WebApp.ready();
Telegram.WebApp.sendData(JSON.stringify(data));
</script>

<template>
  <div class="main-block">
    <Header />
  </div>
</template>

<style scoped>
.main-block {
  padding: 0 6rem;
}
</style>
