<template>
  <div class="one-room">
    <img v-if="imageLink != null" :src="imageLink" alt="image of room" />
    <img v-else src="../icons/logo.png" alt="image of note found room" />
    <div class="room-info">
      <span :class="superHost">Super host</span>
      <div class="light-text">
        <span>{{ type }}.</span> <span>{{ beds }}</span>
      </div>
      <div class="rating">
        <span class="material-icons">star</span><span>{{ rating }}</span>
      </div>
    </div>
    <p class="title">{{ title }}</p>
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

<style scoped lang="scss">
.one-room {
  margin-bottom: 1rem;
  max-width: 395px;
  .title {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;

    color: #333333;
    margin-bottom: 1rem;
  }
}
.one-room img {
  width: 395px;
  height: 269px;
  border-radius: 24px;
  cursor: pointer;
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

.room-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  .light-text {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #828282;
  }
}
</style>
