'use client';

import { useState } from 'react';
import { Camper } from '@/types/camper';
import { formatPrice } from '@/utils/formatPrice';
import Features from '@/components/Features/Features';
import Reviews from '@/components/Reviews/Reviews';
import BookingForm from '@/components/BookingForm/BookingForm';
import { Icon } from '@/components/Icon/Icon';
import GalleryModal from '@/components/GalleryModal/GalleryModal';
import styles from './CamperDetails.module.css';

interface Props {
  camper: Camper;
}

export default function CamperDetails({ camper }: Props) {
  const [tab, setTab] = useState<'features' | 'reviews'>('features');

  // gallery modal state
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = camper.gallery.map(img => img.original);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () =>
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));

  const nextImage = () =>
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <section className={styles.container}>
      {/* HEADER */}
      <header className={styles.header}>
        <h1 className={styles.title}>{camper.name}</h1>

        <div className={styles.meta}>
          <span className={styles.rating}>
            <Icon name="star" size={16} />
            {camper.rating} ({camper.reviews.length} Reviews)
          </span>

          <span className={styles.location}>
            <Icon name="map" size={16} />
            {camper.location}
          </span>
        </div>

        <p className={styles.price}>€{formatPrice(camper.price)}</p>
      </header>

      {/* GALLERY */}
      <ul className={styles.gallery}>
        {camper.gallery.map((img, i) => (
          <li
            key={i}
            className={styles.galleryItem}
            onClick={() => openModal(i)}
          >
            <img src={img.original} alt={`${camper.name} ${i + 1}`} />
          </li>
        ))}
      </ul>

      {/* DESCRIPTION */}
      <p className={styles.description}>{camper.description}</p>

      {/* TABS */}
      <div className={styles.tabs}>
        <button
          type="button"
          onClick={() => setTab('features')}
          className={tab === 'features' ? styles.active : ''}
        >
          Features
        </button>
        <button
          type="button"
          onClick={() => setTab('reviews')}
          className={tab === 'reviews' ? styles.active : ''}
        >
          Reviews
        </button>
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        <div>
          {tab === 'features' ? (
            <Features camper={camper} />
          ) : (
            <Reviews reviews={camper.reviews} />
          )}
        </div>

        <BookingForm />
      </div>

      {/* GALLERY MODAL */}
      {isOpen && (
        <GalleryModal
          images={images}
          current={currentIndex}
          onClose={closeModal}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
}
