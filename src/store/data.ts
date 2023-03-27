// import { RoomDataType } from './data';
import { myStore } from "./store";
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
  filteredData: RoomDataType[];
}

export const useMyDataStore = defineStore({
  id: "myDataStore",
  state: (): DataStore => ({
    myData: [],
    filteredData: [],
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
    getSortedData(city: string, guest: number) {
      if (city == "Pick location") this.filteredData = this.myData;
      else {
        this.filteredData = this.myData.filter(
          (elem: RoomDataType) => elem.city == city && elem.maxGuests <= guest
        );
      }
    },
  },
  getters: {},
});
