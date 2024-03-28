import { create } from "zustand";

const useAddModalStore = create((set) => ({
    show: false,
    updateShow: (x) => set({ show: x }),
    destroy: false,
    updateDestroy: (x) => set({ destroy: x }),
}));

export default useAddModalStore;
