<template>
  <div class="outer-box">
    <div class="nav-fields">
      <div
        class="location"
        :class="{ 'p-hover': isActiveL }"
        @click="clickField1"
      >
        <p class="input-type">location</p>
        <p class="input-text">asdfasdfa</p>
      </div>
      <div class="guest" :class="{ 'p-hover': isActiveG }" @click="clickField2">
        <p class="input-type">guests</p>
        <p class="input-text">asdfasdfa</p>
      </div>
      <div class="search-btn">
        <button><span class="material-icons">search</span> Search</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";

// let isActive = false;

// const clickField = computed(() => {
//   isActive = !isActive;
// });

export default {
  data() {
    return {
      isActiveL: false,
      isActiveG: false,
    };
  },
  methods: {
    clickField1() {
      this.isActiveL = true;
      this.isActiveG = false;
    },
    clickField2() {
      this.isActiveG = true;
      this.isActiveL = false;
    },
  },
};
</script>

<style scoped>
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
  grid-template-columns: repeat(3, 33%);
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
</style>
