import { create } from "zustand";

const useStore = create((set, get) => ({
  games: [],
  nextUrl: "",
  setGames: (data) => set({ games: [...data] }),
  setNextUrl: (url) => set({ nextUrl: url }),
}));

export default useStore;
