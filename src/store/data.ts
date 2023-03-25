import { defineStore } from "pinia";

export interface RoomDataType {
  city: string;
  country: string;
  superHost: boolean;
  title: string;
  rating: number;
  maxGuests: number;
  type: string;
  beds: number;
  photo: string;
}

export const useMyDataStore = defineStore({
  id: "myDataStore",
  state: () => ({
    myData: {} as RoomDataType,
  }),
  actions: {
    async fetchMyData() {
      try {
        const response = await fetch("../stays.json");
        console.log(response);
        const data = await response.json();
        console.log(data);
        this.myData = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {
    myData: (state) => state.myData,
  },
});
