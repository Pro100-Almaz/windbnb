<template>
  <div class="header" v-if="showNavigation">
    <span><img src="../icons/logo.png" alt="Logo of site/company" /></span>

    <SearchBox
      @setLocation="setLocation"
      @setGuests="setGuests"
      @search="search"
    />
  </div>
  <div v-else class="modal-window">
    <ModalNavBar @search="search" />
    <div class="free-space" @click="ChooseLocation"></div>
  </div>
  <div>
    <Rooms />
  </div>
</template>

<script setup lang="ts">
import { useMyDataStore } from "@/store/data";
import { myStore } from "@/store/store";
import SearchBox from "./SearchBox.vue";
import ModalNavBar from "./ModalNavBar.vue";
import Rooms from "./Rooms.vue";
import { computed, ref, onMounted } from "vue";

let showNavigation = ref(true);
let changeLocation = false;
let changeGuests = false;
const roomData = useMyDataStore();
const searchData = myStore();

const cityName = searchData.location.split(", ")[0];

const ChooseLocation = () => {
  showNavigation.value = !showNavigation.value;
};

const setLocation = () => {
  showNavigation.value = !showNavigation.value;
  changeLocation = true;
};

const setGuests = () => {
  showNavigation.value = !showNavigation.value;
  changeGuests = true;
};

const search = () => {
  showNavigation.value = true;
};
const checkNavigation = computed(() => {
  if (changeLocation) return true;
  return false;
});
</script>

<style scoped>
.header {
  align-items: center;

  display: flex;
  justify-content: space-between;

  margin-bottom: 4rem;
}

.modal-window {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(79, 79, 79, 0.4);
  z-index: 1;
}

.free-space {
  width: 100%;
  height: 100%;
}
</style>
