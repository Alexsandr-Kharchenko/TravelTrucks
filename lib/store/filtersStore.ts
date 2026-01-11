import { create } from 'zustand';

interface FiltersState {
  filters: {
    location: string;
  };
  setLocation: (location: string) => void;
}

export const useFiltersStore = create<FiltersState>(set => ({
  filters: {
    location: '',
  },
  setLocation: (location: string) =>
    set(state => ({
      filters: { ...state.filters, location },
    })),
}));
