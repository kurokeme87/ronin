import { create } from 'zustand';

const useStore = create((set) => ({
    isModalOpen: false,
    setIsModalOpen: (status) => set({ isModalOpen: status }),
    isMobileSidebarOpen: false,
    setIsMobileSidebarOpen: (status) => set({ isMobileSidebarOpen: status }),
}));

export default useStore;

