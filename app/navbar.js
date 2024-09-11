// components/Navbar.js

import Link from 'next/link';
import styles from './styles/navbar.module.css'; // Import CSS module

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <ul className={styles.navbar}>
        <li className={styles.navItem}>
          <Link href="/">
            <h1>Home</h1>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/movies">
            <h1>Movies</h1>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/series">
            <h1>Series</h1>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/cartoon">
            <h1>Cartoon</h1>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/creator">
            <h1>Create my own</h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
