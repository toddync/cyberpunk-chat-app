import { create } from "zustand";
import pb from "../pb";

const useUserStore = create((set) => ({
    user: pb.authStore.model || null,
    update: (x) => set({ user: x }),
}));

export default useUserStore;
