import { Review } from '@/types/camper';
import { Icon } from '@/components/Icon/Icon';
import styles from './Reviews.module.css';

export default function Reviews({ reviews }: { reviews: Review[] }) {
  return (
    <section className={styles.reviews}>
      {reviews.map((r, i) => (
        <div key={i} className={styles.review}>
          {/* Верхній рядок: аватар + ім’я + рейтинг */}
          <div className={styles.header}>
            <div className={styles.avatar}>{r.reviewer_name.charAt(0)}</div>

            <div className={styles.meta}>
              <h4>{r.reviewer_name}</h4>

              <div className={styles.stars}>
                {Array.from({ length: r.reviewer_rating }).map((_, i) => (
                  <Icon key={i} name="star" size={16} className={styles.star} />
                ))}
              </div>
            </div>
          </div>

          {/* Коментар на новому рядку */}
          <p className={styles.comment}>{r.comment}</p>
        </div>
      ))}
    </section>
  );
}
