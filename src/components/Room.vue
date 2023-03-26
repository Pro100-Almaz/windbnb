<template>
  <div class="one-room">
    <img v-if="imageLink != null" :src="imageLink" alt="image of room" />
    <img v-else src="../icons/logo.png" alt="image of note found room" />
    <div class="room-info">
      <span :class="superHost">Super host</span>
      <span></span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Room",
  props: {
    imageLink: {
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
    show: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    defineData() {
      return;
    },
    superHost() {
      return {
        "p-host": this.super,
        "p-empty": !this.super,
      };
    },
  },
};
</script>

<style scoped>
.one-room {
  margin-bottom: 1rem;
}
.one-room img {
  width: 395px;
  height: 269px;
  border-radius: 24px;
}
.p-host {
  border: 1px solid #4f4f4f;
  border-radius: 12px;
  justify-content: center;
  padding: 0.3rem 0.5rem;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;

  color: #4f4f4f;
}

.p-empty {
  display: none;
}
</style>
