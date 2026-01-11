import { Camper } from '@/types/camper';

export type FeatureKey =
  | 'AC'
  | 'kitchen'
  | 'TV'
  | 'bathroom'
  | 'radio'
  | 'refrigerator'
  | 'microwave'
  | 'gas'
  | 'water'
  | 'automatic'
  | 'manual'
  | 'diesel'
  | 'petrol';

export const mapFeatures = (camper: Camper): FeatureKey[] => {
  const features: FeatureKey[] = [];

  // 🔥 BOOLEAN features — показуємо тільки якщо true
  if (camper.AC) features.push('AC');
  if (camper.kitchen) features.push('kitchen');
  if (camper.TV) features.push('TV');
  if (camper.bathroom) features.push('bathroom');
  if (camper.radio) features.push('radio');
  if (camper.refrigerator) features.push('refrigerator');
  if (camper.microwave) features.push('microwave');
  if (camper.gas) features.push('gas');
  if (camper.water) features.push('water');

  // 🔥 ENUM values — додаємо як конкретне значення
  if (camper.transmission === 'automatic') features.push('automatic');
  if (camper.transmission === 'manual') features.push('manual');

  if (camper.engine === 'diesel') features.push('diesel');
  if (camper.engine === 'petrol') features.push('petrol');

  return features;
};
