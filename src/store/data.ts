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

export interface DataStore {
  myData: RoomDataType[];
}

export const useMyDataStore = defineStore({
  id: "myDataStore",
  state: (): DataStore => ({
    myData: [],
  }),
  actions: {
    async fetchMyData() {
      try {
        const response = await fetch("stays.json");
        const data = await response.json();
        this.myData = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {},
});
