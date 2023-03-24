<template>
  <div class="header" v-if="showNavigation">
    <span><img src="../icons/logo.png" alt="Logo of site/company" /></span>

    <SearchBox
      @setLocation="setLocation()"
      @setGuests="setGuests"
      @search="search"
    />
  </div>
  <div></div>
</template>

<script setup lang="ts">
import SearchBox from "./SearchBox.vue";
import { computed, ref } from "vue";

let showNavigation = true;
let changeLocation = false;
let changeGuests = false;

const ChooseLocation = (showNavigation: boolean) => {
  showNavigation = false;
};

const setLocation = () => {
  changeLocation = true;
};

const setGuests = () => {
  changeGuests = true;
};

const search = () => {};

const checkNavigation = computed(() => {
  if ()
});
</script>

<style scoped>
.header {
  align-items: center;

  display: flex;
  justify-content: space-between;
}
</style>
