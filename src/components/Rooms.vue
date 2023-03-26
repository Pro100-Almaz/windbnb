<template>
  <div class="head-text">
    <span class="header-text">Stays in Finland</span>
    <span class="statistics">12+ stays</span>
  </div>
  <div class="rooms">
    <div v-for="room in roomData.myData">
      <Room
        v-if="room.city == cityName"
        :imageLink="room.photo"
        :super="room.superHost"
        :rating="room.rating"
        :title="room.title"
        :type="room.type"
        :show="room.city == cityName"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMyDataStore } from "@/store/data";
import { myStore } from "@/store/store";
import { onMounted, ref, computed } from "vue";
import Room from "./Room.vue";

const roomData = useMyDataStore();
const searchData = myStore();

const cityList = ref(new Array());

const cityName = searchData.location.split(",")[0];
console.log(cityName);

onMounted(async () => {
  await roomData.fetchMyData();
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  padding: 0 2rem;
}
</style>
