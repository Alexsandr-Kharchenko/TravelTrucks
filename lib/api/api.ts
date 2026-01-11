import axios from 'axios';
import { Camper } from '@/types/camper';
import { Filters } from '@/types/filters';

const api = axios.create({
  baseURL: 'https://travel-trucks-backend-gv9o.onrender.com',
});

export interface FetchCampersResponse {
  items: Camper[];
  total: number;
}

export const getAllCampers = async (
  page = 1,
  limit = 4,
  filters?: Filters
): Promise<FetchCampersResponse> => {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  if (filters?.location) params.append('location', filters.location);
  if (filters?.form) params.append('form', filters.form);
  if (filters?.AC) params.append('AC', 'true');
  if (filters?.kitchen) params.append('kitchen', 'true');
  if (filters?.TV) params.append('TV', 'true');
  if (filters?.bathroom) params.append('bathroom', 'true');

  const res = await api.get(`/campers?${params.toString()}`);

  return {
    items: Array.isArray(res.data.items) ? res.data.items : [],
    total: res.data.total ?? 0,
  };
};

export const getCamperById = async (id: string) => {
  try {
    const res = await api.get(`/campers/${id}`);
    return res.data;
  } catch {
    return null;
  }
};
