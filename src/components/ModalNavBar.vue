<template>
  <div class="outer-box">
    <div class="nav-fields">
      <div
        class="location"
        :class="{ 'p-hover': isActiveL }"
        @click="clickField1()"
      >
        <p class="input-type">location</p>
        <p class="input-text">{{ searchData.location }}</p>
      </div>
      <div
        class="guest"
        :class="{ 'p-hover': isActiveG }"
        @click="clickField2()"
      >
        <p class="input-type">guests</p>
        <p class="input-text">
          {{ searchData.adultCount + searchData.childCount }}
        </p>
      </div>
      <div class="search-btn">
        <button @click="onSearch">
          <span class="material-icons">search</span>
          Search
        </button>
      </div>
      <div>
        <div v-for="city in cities" v-if="isActiveL" class="city-btn">
          <p>
            <span class="material-icons" style="margin-right: 10px"
              >location_on</span
            >
            <span class="city-name" @click="selectCity(city)">{{ city }}</span>
          </p>
        </div>
      </div>
      <div v-if="isActiveG">
        <div class="counter">
          <p class="name">Adult</p>
          <p class="description">Ages 13 or above</p>
          <div class="counter-btn">
            <div class="plus" @click="subtractCounterAdult">
              <div style="margin: 0 auto">-</div>
            </div>
            <div class="count">{{ searchData.adultCount }}</div>
            <div class="plus" @click="addCounterAdult">
              <div style="margin: 0 auto">+</div>
            </div>
          </div>
        </div>
        <div class="counter">
          <p class="name">Children</p>
          <p class="description">Ages 2-12</p>
          <div class="counter-btn">
            <div
              class="plus"
              @click="if (searchData.childCount > 0) searchData.childCount--;"
            >
              <div style="margin: 0 auto">-</div>
            </div>
            <div class="count">{{ searchData.childCount }}</div>
            <div class="plus" @click="searchData.childCount++">
              <div style="margin: 0 auto">+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { myStore } from "@/store/store";

const searchData = myStore();
let isActiveG = ref(false);
let isActiveL = ref(false);

const emit = defineEmits(["search"]);

const cities = [
  "Helsinki, Finland",
  "Turku, Finland",
  "Oulu, Finland",
  "Vaasa, Finland",
];

function onSearch() {
  emit("search");
}

const clickField1 = () => {
  isActiveL.value = true;
  isActiveG.value = false;
};

const clickField2 = () => {
  isActiveG.value = true;
  isActiveL.value = false;
};

const selectCity = (name: string) => {
  searchData.location = name;
  isActiveG.value = true;
  isActiveL.value = false;
};

const subtractCounterAdult = () => {
  if (searchData.adultCount > 0) searchData.adultCount--;
};

const addCounterAdult = () => {
  searchData.adultCount++;
};
</script>

<style scoped lang="scss">
.outer-box {
  position: fixed;
  width: 100%;
  z-index: 2;
  background-color: var(--color-background);
  height: 460px;
  padding: 6rem 6rem 0 6rem;
}
.nav-fields {
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  height: 55px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  color: #333333;
}

.location {
  padding-left: 1.5rem;
  height: 55px;

  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--color-border);
  justify-content: center;

  color: #333333;
  cursor: pointer;
}

.input-type {
  font-family: "Mulish";
  font-style: normal;
  font-weight: 800;
  font-size: 9px;
  line-height: 11px;
  text-transform: uppercase;
}

.input-text {
  font-family: "Mulish";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
}

.guest {
  padding-left: 2rem;
  height: 55px;

  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--color-border);
  justify-content: center;

  color: #333333;
  cursor: pointer;
}

.p-hover {
  border-radius: 1rem;
  border: 1px solid black;
}
.search-btn {
  justify-content: center;
  margin: auto;
}

.search-btn button {
  background-color: var(--vt-c-orrange);
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 0.75rem 1.5rem;
  border: none;

  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  display: flex;
  flex-direction: row;

  color: var(--vt-c-white);
  cursor: pointer;
}

.search-btn button:hover {
  background-color: #f88181;
}

.search-btn button:active {
  background-color: #fc6a6a;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

.city-name {
  font-family: "Muli";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #4f4f4f;
}

.city-btn {
  cursor: pointer;

  font-family: "Mulish";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  color: #4f4f4f;

  margin-top: 2rem;
}

.counter {
  margin-top: 18px;
  font-family: "Mulish", sans-serif;
  font-size: 14px;
  line-height: 18px;
  margin-left: 27px;
  margin-bottom: 3rem;
  .name {
    font-weight: 700;
    color: #333333;
  }
  .description {
    color: #bdbdbd;
    margin-bottom: 12px;
  }
  .counter-btn {
    display: flex;
    align-items: center;
    .count {
      margin: 0 15px;
      color: black;
    }
    .plus {
      display: flex;
      align-items: center;
      height: 23px;
      width: 23px;
      border: 1px solid #828282;
      border-radius: 4px;
      cursor: pointer;
    }
  }
}
</style>
