<template>
  <div class="one-room">
    <img v-if="img != null" src="{{ img }}" alt="image of room" />
    <img v-else src="../icons/logo.png" alt="image of note found room" />
    <div class="room-info">
      <span :class="superHost"></span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Room",
  props: {
    img: {
      type: String,
      default: null,
    },
    super: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "Modern house",
    },
    rating: {
      type: Number,
      default: 5.0,
    },
    type: {
      type: String,
      default: null,
    },
    beds: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    defineData() {
      return;
    },
    superHost() {
      return {
        "p-host": this.super,
      };
    },
  },
};
</script>

<style scoped>
.one-room img {
  width: 395px;
  height: 269px;
  border-radius: 24px;
}
.p-host {
  border: 1px solid #4f4f4f;
  border-radius: 12px;
  margin: auto;
  justify-content: center;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;

  color: #4f4f4f;
}
</style>
