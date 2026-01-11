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
  error: string | null;

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
      error: null,

      filters: {
        location: '',
        form: '',
        AC: false,
        kitchen: false,
        TV: false,
        bathroom: false,
      },

      setFilters: newFilters => {
        const updatedFilters = { ...get().filters, ...newFilters };

        const allEmpty =
          !updatedFilters.location &&
          !updatedFilters.form &&
          !updatedFilters.AC &&
          !updatedFilters.kitchen &&
          !updatedFilters.TV &&
          !updatedFilters.bathroom;

        set({
          filters: updatedFilters,
          campers: [],
          page: 1,
          error: null,
        });

        // Якщо всі фільтри очищені — завантажуємо всі кемпери
        if (allEmpty) {
          get().loadCampers(false);
        }
      },

      loadCampers: async (loadMore = false) => {
        if (get().isLoading) return;

        set({ isLoading: true, error: null });

        const { page, filters, campers } = get();
        const nextPage = loadMore ? page + 1 : 1;

        try {
          const data = await getAllCampers(nextPage, 4, filters);

          const newCampers = Array.isArray(data.items) ? data.items : [];
          const total = data.total ?? 0;

          set({
            campers: loadMore ? [...campers, ...newCampers] : newCampers,
            total,
            page: nextPage,
            isLoading: false,
            error:
              newCampers.length === 0
                ? 'No campers found with these filters'
                : null,
          });
        } catch (error) {
          console.error('Error loading campers:', error);
          set({ isLoading: false, error: 'Failed to load campers' });
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
