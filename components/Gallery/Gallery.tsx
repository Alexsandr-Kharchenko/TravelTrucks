'use client';

import styles from './Gallery.module.css';

interface GalleryItem {
  thumb: string;
  original: string;
}

interface GalleryProps {
  items: GalleryItem[];
  alt: string;
}

export default function Gallery({ items, alt }: GalleryProps) {
  return (
    <ul className={styles.gallery}>
      {items.map((item, index) => (
        <li key={index} className={styles.item}>
          <img src={item.original} alt={`${alt} ${index + 1}`} loading="lazy" />
        </li>
      ))}
    </ul>
  );
}
