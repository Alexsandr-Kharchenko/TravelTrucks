import { Camper } from '@/types/camper';
import { mapFeatures, FeatureKey } from '@/utils/mapFeatures';
import { Icon } from '@/components/Icon/Icon';
import styles from './Features.module.css';

const featureIcons: Record<FeatureKey, string> = {
  AC: 'ac',
  kitchen: 'kitchen',
  TV: 'tv',
  bathroom: 'bathroom',
  radio: 'radio',
  refrigerator: 'refrigerator',
  microwave: 'microwave',
  gas: 'gas',
  water: 'water',
  automatic: 'automatic',
  manual: 'manual',
  diesel: 'diesel',
  petrol: 'petrol',
};

interface Props {
  camper: Camper;
}

export default function Features({ camper }: Props) {
  const features = mapFeatures(camper);

  return (
    <section className={styles.wrapper}>
      {/* FEATURES */}
      <ul className={styles.features}>
        {features.map(feature => (
          <li key={feature} className={styles.item}>
            <Icon
              name={featureIcons[feature]}
              size={20}
              className={styles.icon}
            />
            <span className={styles.label}>
              {feature.charAt(0).toUpperCase() + feature.slice(1)}
            </span>
          </li>
        ))}
      </ul>

      {/* VEHICLE DETAILS */}
      <section className={styles.details}>
        <h3 className={styles.detailsTitle}>Vehicle details</h3>

        <div className={styles.divider} />

        <ul className={styles.detailsList}>
          <li>
            <span>Form</span>
            <span>{camper.form}</span>
          </li>
          <li>
            <span>Length</span>
            <span>{camper.length} m</span>
          </li>
          <li>
            <span>Width</span>
            <span>{camper.width} m</span>
          </li>
          <li>
            <span>Height</span>
            <span>{camper.height} m</span>
          </li>
          <li>
            <span>Tank</span>
            <span>{camper.tank} l</span>
          </li>
          <li>
            <span>Consumption</span>
            <span>{camper.consumption} l/100 km</span>
          </li>
        </ul>
      </section>
    </section>
  );
}
