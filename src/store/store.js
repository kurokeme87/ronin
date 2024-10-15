import { create } from 'zustand';

const useStore = create((set) => ({
    isModalOpen: false,
    setIsModalOpen: (status) => set({ isModalOpen: status }),
}));

export default useStore;

