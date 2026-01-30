import { create } from 'zustand';

export const useSceneState = create((set) => ({
    focus: "default",
    panel: null,
    currentPage: "home",
    isLoading: true,
    
    setFocus: (focus) => set(() => ({ focus })),
    openPanel: (panel) => set(() => ({ panel })),
    closePanel: () => set(() => ({ panel: null })),
    setCurrentPage: (page) => set(() => ({ currentPage: page, panel: null })),
    setLoading: (loading) => set(() => ({ isLoading: loading })),
}));