<template>
  <div class="search-box">
    <div class="select-location" @click="onSetLocation">
      <span v-if="searchData.checkData"> {{ searchData.location }} </span>
      <span v-else> Add location </span>
    </div>
    <div class="select-count" @click="onSetGuest">
      <span v-if="searchData.checkData">
        {{ searchData.adultCount + searchData.childCount }}
      </span>
      <span v-else> Add guest </span>
    </div>
    <div class="material-icons search" @click="onSearch">search</div>
  </div>
</template>

<script setup lang="ts">
import { myStore } from "@/store/store";

const searchData = myStore();

const emit = defineEmits(["setLocation", "setGuests", "search"]);

function onSetLocation() {
  emit("setLocation");
}

function onSetGuest() {
  emit("setGuests");
}

function onSearch() {
  emit("search");
}
</script>

<style scoped lang="scss">
.search-box {
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  color: #333333;
}

.select-location {
  border-right: 1px solid var(--color-border);
  padding: 1rem 1.5rem;
}

.select-location span {
  cursor: pointer;
}

.select-count {
  border-right: 1px solid var(--color-border);
  padding: 1rem 1.5rem;

  span {
    cursor: pointer;
  }
}

.search {
  padding: 1rem 1.5rem;
  cursor: pointer;
}

.search:hover {
  background-color: var(--color-background-mute);
  border-radius: 0 1rem 1rem 0;
  transition: 0.5s;
}

.search:active {
  background-color: var(--vt-c-orrange);
  border-radius: 0 1rem 1rem 0;
}
</style>
