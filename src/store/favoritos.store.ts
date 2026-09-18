import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritosState {
  readonly favoritos:     readonly string[];
  readonly alternarFavorito: (treinoId: string) => void;
  readonly estaNosFavoritos: (treinoId: string) => boolean;
  readonly limparFavoritos: () => void;
}

export const useFavoritosStore = create<FavoritosState>()(
  persist(
    (set, get) => ({
      favoritos: [],

      alternarFavorito: (treinoId) => {
        const atuais = get().favoritos;
        const jaFavoritado = atuais.includes(treinoId);
        set({
          favoritos: jaFavoritado
            ? atuais.filter((id) => !== treinoId)
            : [...atuais, treinoId]
        });
      },
      estaNosFavoritos: (treinoId) => get().favoritos.includes(treinoId),
      limparFavoritos: () => set({ favoritos: [] })
    }),
    { name: 'trilhafit-favoritos' }
  )
);