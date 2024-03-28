import { create } from "zustand";

const useFooterPaddingStore = create((set) => ({
    padding: 0,
    update: (x) => set({ padding: x }),
}));

export default useFooterPaddingStore;
