<template>
  <div class="head-text">
    <span class="header-text">Stays in Finland</span>
    <span class="statistics">12+ stays</span>
  </div>

  <div v-for="room in roomData.myData" class="rooms">
    <Room
      :imageLink="room.photo"
      :super="room.superHost"
      :rating="room.rating"
      :title="room.title"
      :type="room.type"
    />
  </div>
</template>

<script setup lang="ts">
import { useMyDataStore } from "@/store/data";
import { onMounted } from "vue";
import Room from "./Room.vue";

const roomData = useMyDataStore();
onMounted(async () => {
  await roomData.fetchMyData();
  console.log(roomData.myData[1].city);
});
</script>

<style scoped>
.head-text {
  display: flex;
  justify-content: space-between;

  margin-bottom: 2rem;
}
.header-text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #333333;
}

.statistics {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  color: #4f4f4f;
}

.rooms {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>
