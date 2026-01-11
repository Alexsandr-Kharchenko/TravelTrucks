'use client';

import styles from './GalleryModal.module.css';
import { Icon } from '@/components/Icon/Icon';

interface Props {
  images: string[];
  current: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function GalleryModal({
  images,
  current,
  onClose,
  onPrev,
  onNext,
}: Props) {
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          <Icon name="close" size={24} />
        </button>

        <button className={styles.prev} onClick={onPrev}>
          ‹
        </button>

        <img src={images[current]} alt="Camper photo" />

        <button className={styles.next} onClick={onNext}>
          ›
        </button>
      </div>
    </div>
  );
}
