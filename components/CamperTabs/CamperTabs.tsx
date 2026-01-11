'use client';

import { useState } from 'react';
import { Camper } from '@/types/camper';
import styles from './CamperTabs.module.css';

type Tab = 'features' | 'reviews';

export default function CamperTabs({ camper }: { camper: Camper }) {
  const [tab, setTab] = useState<Tab>('features');

  return (
    <>
      <div className={styles.tabs}>
        <button
          className={tab === 'features' ? styles.active : ''}
          onClick={() => setTab('features')}
        >
          Features
        </button>
        <button
          className={tab === 'reviews' ? styles.active : ''}
          onClick={() => setTab('reviews')}
        >
          Reviews
        </button>
      </div>

      {tab === 'features' && <Features camper={camper} />}
      {tab === 'reviews' && <Reviews camper={camper} />}
    </>
  );
}

/* ---------- FEATURES ---------- */

function Features({ camper }: { camper: Camper }) {
  return (
    <div className={styles.features}>
      <ul className={styles.featuresList}>
        {camper.transmission && <li>Transmission: {camper.transmission}</li>}
        {camper.engine && <li>Engine: {camper.engine}</li>}
        {camper.AC && <li>AC</li>}
        {camper.bathroom && <li>Bathroom</li>}
        {camper.kitchen && <li>Kitchen</li>}
        {camper.TV && <li>TV</li>}
        {camper.radio && <li>Radio</li>}
        {camper.refrigerator && <li>Refrigerator</li>}
        {camper.microwave && <li>Microwave</li>}
        {camper.gas && <li>Gas</li>}
        {camper.water && <li>Water</li>}
      </ul>

      <h4>Vehicle details</h4>
      <ul className={styles.details}>
        <li>Form: {camper.form}</li>
        <li>Length: {camper.length}</li>
        <li>Width: {camper.width}</li>
        <li>Height: {camper.height}</li>
        <li>Tank: {camper.tank}</li>
        <li>Consumption: {camper.consumption}</li>
      </ul>
    </div>
  );
}

/* ---------- REVIEWS ---------- */

function Reviews({ camper }: { camper: Camper }) {
  return (
    <ul className={styles.reviews}>
      {camper.reviews.map((r, idx) => (
        <li key={idx} className={styles.review}>
          <div className={styles.reviewHeader}>
            <strong>{r.reviewer_name}</strong>
            <Stars rating={r.reviewer_rating} />
          </div>
          <p>{r.comment}</p>
        </li>
      ))}
    </ul>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map(n => (
        <span key={n}>{n <= rating ? '★' : '☆'}</span>
      ))}
    </div>
  );
}
