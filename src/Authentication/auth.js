import { create } from "zustand";

export const useAuth = create((set) => ({
  accesstoken: null,
  role: null,
  username: null,
  isauthenticated: false,
  setAuthenticated: (value) => set({ isauthenticated: value }),
  setToken: (value) => set({ accesstoken: value }),
  setRole: (value) => set({ role: value }),
  setUser: (value) => set({ username: value }),
}));
