import { create } from "zustand";

const useConversationsStore = create((set) => ({
    conversations: [],
    current: {},
    update: (x) => set({ conversations: x }),
    updateCurrent: (x) => set({ current: x }),
}));

export default useConversationsStore;
