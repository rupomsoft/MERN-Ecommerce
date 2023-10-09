import create from 'zustand';

const menuBarStore = create((set) => ({
    status: "d-none",
    show: () => set((state) => ({ status:"" })),
    hide: () => set((state) => ({ status: "d-none"})),
}));
export default menuBarStore;
