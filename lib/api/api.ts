import axios from 'axios';
import { Camper } from '@/types/camper';
import { Filters } from '@/types/filters';

const api = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
});

export const getAllCampers = async (
  page = 1,
  limit = 4,
  filters?: Filters
): Promise<{ items: Camper[]; total: number }> => {
  const params: Record<string, string | boolean | number> = {
    page,
    limit,
  };

  if (filters?.location) params.location = filters.location;
  if (filters?.form) params.form = filters.form;
  if (filters?.AC) params.AC = true;
  if (filters?.kitchen) params.kitchen = true;
  if (filters?.TV) params.TV = true;
  if (filters?.bathroom) params.bathroom = true;

  // MockAPI повертає масив і total
  const res = await api.get<{ items: Camper[]; total: number }>('/campers', {
    params,
  });

  return {
    items: res.data.items ?? [],
    total: res.data.total ?? 0,
  };
};

export const getCamperById = async (id: string) => {
  try {
    const res = await api.get<Camper>(`/campers/${id}`);
    return res.data;
  } catch {
    return null;
  }
};
