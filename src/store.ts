// create a store to store total price of tickets

import { create } from "zustand";

type totalPriceStore = {
  total: number;
  increase: (by: number) => void;
  decrease: (by: number) => void;
};

export const useTotalPriceStore = create<totalPriceStore>((set) => ({
  total: 0,
  increase: (by) => set((state) => ({ total: state.total + by })),
  decrease: (by) => set((state) => ({ total: state.total - by })),
}));
