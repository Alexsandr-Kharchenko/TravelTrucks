'use client';

import CamperTabs from '@/components/CamperTabs/CamperTabs';
import BookingForm from '@/components/BookingForm/BookingForm';
import { Camper } from '@/types/camper';

export default function CamperDetailsClient({ camper }: { camper: Camper }) {
  return (
    <main
      style={{
        padding: 64,
        display: 'grid',
        gridTemplateColumns: '1fr 420px',
        gap: 48,
      }}
    >
      <section>
        <h1>{camper.name}</h1>
        <p>
          €{camper.price.toFixed(2)} • ⭐ {camper.rating}
        </p>
        <CamperTabs camper={camper} />
      </section>
      <BookingForm />
    </main>
  );
}
