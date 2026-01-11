'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export const Header = () => {
  const pathname = usePathname(); // отримує поточний шлях

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/TravelTrucks.svg"
            alt="TravelTrucks logo"
            width={136}
            height={16}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className={styles.nav}>
          <Link
            href="/"
            className={`${styles.navLink} ${
              pathname === '/' ? styles.active : ''
            }`}
          >
            Home
          </Link>

          <Link
            href="/catalog"
            className={`${styles.navLink} ${
              pathname === '/catalog' ? styles.active : ''
            }`}
          >
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
};
