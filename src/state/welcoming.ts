import { create } from "zustand";

type Welcome = {
  isDone: boolean;
  finishWelcoming: () => void;
  startWelcoming: () => void;
};

export const useWelcomeStore = create<Welcome>()((set) => ({
  isDone: false,
  finishWelcoming: () => set((state) => ({ isDone: true })),
  startWelcoming: () => set((state) => ({ isDone: false })),
}));
