import client from "@/axios";
import { create } from "zustand";

const useStore = create((set, get) => ({
  games: [],
  getPopularGames: async () => {
    const res = await client.get(`/games`);
    if (res.status === 200) set({ games: [...res.data.results] });
  },
}));

export default useStore;
