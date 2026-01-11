import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Camper } from '@/types/camper';
import { Filters } from '@/types/filters';
import { getAllCampers } from '@/lib/api/api';

interface CamperState {
  campers: Camper[];
  total: number;
  page: number;
  isLoading: boolean;
  filters: Filters;
  favorites: string[];

  setFilters: (filters: Partial<Filters>) => void;
  loadCampers: (loadMore?: boolean) => Promise<void>;
  toggleFavorite: (id: string) => void;
}

export const useCamperStore = create<CamperState>()(
  persist(
    (set, get) => ({
      campers: [],
      total: 0,
      page: 1,
      isLoading: false,
      favorites: [],

      filters: {
        location: '',
        form: '',
        AC: false,
        kitchen: false,
        TV: false,
        bathroom: false,
      },

      setFilters: newFilters =>
        set(state => ({
          filters: { ...state.filters, ...newFilters },
          campers: [],
          page: 1,
        })),

      loadCampers: async (loadMore = false) => {
        if (get().isLoading) return;

        set({ isLoading: true });

        const { page, filters, campers } = get();
        const nextPage = loadMore ? page + 1 : 1;

        try {
          const data = await getAllCampers(nextPage, 4, filters);

          // Завжди гарантуємо масив
          const newCampers = Array.isArray(data.items) ? data.items : [];
          const total = data.total ?? 0;

          set({
            campers: loadMore
              ? [...(campers || []), ...newCampers]
              : newCampers,
            total,
            page: nextPage,
            isLoading: false,
          });
        } catch (error) {
          console.error('Error loading campers:', error);
          set({ isLoading: false });
        }
      },

      toggleFavorite: id =>
        set(state => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter(f => f !== id)
            : [...state.favorites, id],
        })),
    }),
    {
      name: 'travel-trucks',
      partialize: state => ({ favorites: state.favorites }),
    }
  )
);
