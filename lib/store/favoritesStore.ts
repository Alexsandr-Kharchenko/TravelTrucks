import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useFavoritesStore = create(
  persist<any>(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (id: string) => {
        const favs = get().favorites;
        set({
          favorites: favs.includes(id)
            ? favs.filter((f: string) => f !== id)
            : [...favs, id],
        });
      },
    }),
    { name: 'favorites' }
  )
);
