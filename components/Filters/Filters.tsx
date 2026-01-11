'use client';

import { useCamperStore } from '@/lib/store/campersStore';
import { Icon } from '@/components/Icon/Icon';
import { SvgSprite } from '@/components/SvgSprite/SvgSprite';
import styles from './Filters.module.css';

const EQUIPMENT = [
  { key: 'AC', label: 'AC', icon: 'ac' },
  { key: 'kitchen', label: 'Kitchen', icon: 'kitchen' },
  { key: 'TV', label: 'TV', icon: 'tv' },
  { key: 'bathroom', label: 'Bathroom', icon: 'bathroom' },
] as const;

export default function Filters() {
  const { filters, setFilters, loadCampers } = useCamperStore();

  return (
    <>
      <SvgSprite />

      {/* ДОБАВЛЯЄМО КОНТЕЙНЕР */}
      <div className={styles.container}>
        <aside className={styles.filters}>
          {/* LOCATION */}
          <div className={styles.block}>
            <p className={styles.label}>Location</p>
            <input
              className={styles.input}
              placeholder="Kyiv, Ukraine"
              value={filters.location}
              onChange={e => setFilters({ location: e.target.value })}
            />
          </div>

          <p className={styles.filtersTitle}>Filters</p>

          {/* VEHICLE EQUIPMENT */}
          <div className={styles.block}>
            <p className={styles.blockTitle}>Vehicle equipment</p>

            <div className={styles.divider} />

            <div className={styles.grid}>
              {EQUIPMENT.map(item => (
                <button
                  key={item.key}
                  className={`${styles.option} ${
                    filters[item.key] ? styles.active : ''
                  }`}
                  onClick={() => setFilters({ [item.key]: !filters[item.key] })}
                >
                  <Icon name={item.icon} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* VEHICLE TYPE */}
          <div className={styles.block}>
            <p className={styles.blockTitle}>Vehicle type</p>

            <div className={styles.divider} />

            <div className={styles.grid}>
              <button
                className={`${styles.option} ${
                  filters.form === 'panelTruck' ? styles.active : ''
                }`}
                onClick={() =>
                  setFilters({
                    form: filters.form === 'panelTruck' ? '' : 'panelTruck',
                  })
                }
              >
                <Icon name="panelTruck" />
                <span>Van</span>
              </button>

              <button
                className={`${styles.option} ${
                  filters.form === 'fullyIntegrated' ? styles.active : ''
                }`}
                onClick={() =>
                  setFilters({
                    form:
                      filters.form === 'fullyIntegrated'
                        ? ''
                        : 'fullyIntegrated',
                  })
                }
              >
                <Icon name="fullyIntegrated" />
                <span>Fully Integrated</span>
              </button>

              <button
                className={`${styles.option} ${
                  filters.form === 'alcove' ? styles.active : ''
                }`}
                onClick={() =>
                  setFilters({
                    form: filters.form === 'alcove' ? '' : 'alcove',
                  })
                }
              >
                <Icon name="alcove" />
                <span>Alcove</span>
              </button>
            </div>
          </div>

          <button className={styles.search} onClick={() => loadCampers(false)}>
            Search
          </button>
        </aside>
      </div>
    </>
  );
}
