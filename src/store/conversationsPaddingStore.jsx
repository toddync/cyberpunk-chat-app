import { create } from "zustand";

const useConversationsPaddingStore = create((set) => ({
    padding: 0,
    update: (x) => set({ padding: x }),
}));

export default useConversationsPaddingStore;
