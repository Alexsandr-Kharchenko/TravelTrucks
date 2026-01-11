'use client';

import { useCampersStore } from '@/lib/store/campersStore';

export default function LoadMoreButton() {
  const { fetchCampers, loading } = useCampersStore();

  return (
    <button disabled={loading} onClick={() => fetchCampers({}, false)}>
      Load more
    </button>
  );
}
