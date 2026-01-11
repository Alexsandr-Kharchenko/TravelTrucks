import { create } from 'zustand';

export const useFiltersStore = create<any>(set => ({
  filters: {
    location: '',
  },
  setLocation: (location: string) =>
    set((state: any) => ({
      filters: { ...state.filters, location },
    })),
}));
