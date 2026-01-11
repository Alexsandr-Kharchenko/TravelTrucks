import Link from 'next/link';
import styles from './Banner.module.css';

export default function Banner() {
  return (
    <section className={styles.banner}>
      <img
        src="/Picture.png"
        alt="Campers banner"
        className={styles.bannerBg}
      />

      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Campers of your dreams</h1>

          <p className={styles.subtitle}>
            You can find everything you want in our catalog
          </p>

          <Link href="/catalog" className={styles.button}>
            View Now
          </Link>
        </div>
      </div>
    </section>
  );
}
