'use client';

import { useEffect, useRef } from 'react';
import { useCamperStore } from '@/lib/store/campersStore';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/Icon/Icon';
import { SvgSprite } from '@/components/SvgSprite/SvgSprite';
import styles from './CamperCard.module.css';

export default function CamperGrid() {
  const {
    campers,
    total,
    isLoading,
    loadCampers,
    favorites,
    toggleFavorite,
    error,
  } = useCamperStore();

  const containerRef = useRef<HTMLDivElement>(null);
  const prevCountRef = useRef(0);

  useEffect(() => {
    loadCampers(false);
  }, [loadCampers]);

  const safeCampers = Array.isArray(campers) ? campers : [];

  const handleLoadMore = async () => {
    prevCountRef.current = safeCampers.length;
    await loadCampers(true);

    const firstNewIndex = prevCountRef.current;
    const container = containerRef.current;
    if (container && container.children[firstNewIndex]) {
      (container.children[firstNewIndex] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <SvgSprite />

      <div className={styles.container}>
        <div className={styles.catalog}>
          <aside className={styles.filters}>{/* Тут фільтри */}</aside>

          <div className={styles.list} ref={containerRef}>
            {!isLoading && safeCampers.length === 0 && error && (
              <p className={styles.error}>{error}</p>
            )}

            {safeCampers.map(camper => (
              <article key={camper.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  {camper.gallery && camper.gallery.length > 0 ? (
                    <Image
                      src={camper.gallery[0].thumb}
                      alt={camper.name}
                      fill
                      className={styles.image}
                    />
                  ) : (
                    <div
                      style={{
                        width: '100%',
                        height: '200px',
                        background: '#eee',
                      }}
                    />
                  )}
                </div>

                <div className={styles.content}>
                  <div className={styles.header}>
                    <h3 className={styles.camperName}>{camper.name}</h3>
                    <div className={styles.priceFav}>
                      <p className={styles.camperPrice}>
                        €{camper.price.toFixed(2)}
                      </p>
                      <button
                        className={styles.favBtn}
                        onClick={() => toggleFavorite(camper.id)}
                      >
                        <Icon
                          name={
                            favorites.includes(camper.id)
                              ? 'heart-pressed'
                              : 'heart'
                          }
                        />
                      </button>
                    </div>
                  </div>

                  <div className={styles.meta}>
                    <div className={styles.metaItem}>
                      <Icon name="star" size={16} className={styles.star} />
                      <span className={styles.rating}>
                        {camper.rating} ({camper.reviews.length} Reviews)
                      </span>
                    </div>

                    <div className={styles.metaItem}>
                      <Icon name="map" />
                      <span className={styles.location}>{camper.location}</span>
                    </div>
                  </div>

                  <p className={styles.description}>{camper.description}</p>

                  <div className={styles.features}>
                    <div className={styles.feature}>
                      <Icon name="transmission" />
                      <span>
                        {camper.transmission === 'automatic'
                          ? 'Automatic'
                          : 'Manual'}
                      </span>
                    </div>

                    <div className={styles.feature}>
                      <Icon name={camper.engine} />
                      <span>
                        {camper.engine === 'petrol' ? 'Petrol' : 'Diesel'}
                      </span>
                    </div>

                    {camper.kitchen && (
                      <div className={styles.feature}>
                        <Icon name="kitchen" />
                        <span>Kitchen</span>
                      </div>
                    )}

                    {camper.AC && (
                      <div className={styles.feature}>
                        <Icon name="ac" />
                        <span>AC</span>
                      </div>
                    )}
                  </div>

                  <Link href={`/catalog/${camper.id}`} className={styles.more}>
                    Show more
                  </Link>
                </div>
              </article>
            ))}

            {/* Кнопка Load More */}
            {!isLoading &&
              safeCampers.length < total &&
              safeCampers.length > 0 && (
                <button className={styles.loadMore} onClick={handleLoadMore}>
                  Load more
                </button>
              )}
          </div>

          {/* Loader */}
          {isLoading && <p className={styles.loader}>Loading...</p>}
        </div>
      </div>
    </>
  );
}
