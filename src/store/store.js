import { create } from 'zustand';

const useStore = create((set) => ({
    isModalOpen: false,
    setIsModalOpen: (status) => set({ isModalOpen: status }),
    isMobileSidebarOpen: false,
    setIsMobileSidebarOpen: (status) => set({ isMobileSidebarOpen: status }),
    roninAddress: '',
    setRoninAddress: (address) => set({ roninAddress: address }),
    isRoninModalOpen: false,
    setIsRoninModalOpen: (status) => set({ isRoninModalOpen: status }),
}));

export default useStore;

