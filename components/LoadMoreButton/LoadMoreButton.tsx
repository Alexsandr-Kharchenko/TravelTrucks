'use client';

import { useCamperStore } from '@/lib/store/campersStore';

export default function LoadMoreButton() {
  const { loadCampers, isLoading } = useCamperStore();

  return (
    <button
      disabled={isLoading}
      onClick={() => loadCampers(true)}
      className="load-more-btn"
    >
      {isLoading ? 'Loading...' : 'Load More'}
    </button>
  );
}
