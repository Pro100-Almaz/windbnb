<template>
  <div v-for="room in roomData">
    <Room />
  </div>
</template>

<script setup lang="ts">
import { useMyDataStore } from "@/store/data";
import { onMounted } from "vue";
import Room from "./Room.vue";
import jsonData from "@/stays.json";
import { myStore } from "@/store/store";

const roomData = useMyDataStore();
onMounted(async () => {
  await roomData.fetchMyData();
  console.log(roomData.myData.city);
});
</script>

<style scoped></style>
