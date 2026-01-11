'use client';

import Filters from '@/components/Filters/Filters';
import CamperGrid from '@/components/CamperCard/CamperCard';
import styles from './CatalogPage.module.css';

export default function CatalogPage() {
  return (
    <section className={styles.catalogSection}>
      <div className={styles.container}>
        <Filters />
        <CamperGrid />
      </div>
    </section>
  );
}
