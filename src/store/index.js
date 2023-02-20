import { create } from "zustand";

const useStore = create((set, get) => ({
  games: [],
  stores: [],
  nextUrl: "",
  setGames: (data) => set({ games: [...data] }),
  setStores: (data) => set({ stores: [...data] }),
  setNextUrl: (url) => set({ nextUrl: url }),
}));

export default useStore;
