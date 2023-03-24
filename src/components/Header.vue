<template>
  <div class="header" v-if="showNavigation">
    <span><img src="../icons/logo.png" alt="Logo of site/company" /></span>

    <SearchBox @onSetLocation="setLocation()" />
  </div>
  <div></div>
</template>

<script setup lang="ts">
import SearchBox from "./SearchBox.vue";

const showNavigation = true;

const ChooseLocation = (showNavigation: boolean) => {
  showNavigation = false;
};

const setLocation = () => {
  console.log("Hello world");
};
</script>

<style scoped>
.header {
  align-items: center;

  display: flex;
  justify-content: space-between;
}
</style>
