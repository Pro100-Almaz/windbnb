import { defineStore } from "pinia";

export interface SearchData {
  location: string;
  adultCount: number;
  childCount: number;
}

export const myStore = defineStore({
  id: "searchData",
  state: (): SearchData => ({
    location: "Pick location",
    adultCount: 0,
    childCount: 0,
  }),
  getters: {
    checkData(): boolean {
      return this.adultCount + this.childCount !== 0;
    },
  },
  actions: {},
});
