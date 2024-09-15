// components/Navbar.js

import Link from 'next/link';
import styles from './styles/navbar.module.css'; // Import CSS module

const Navbar = ({ highlighted }) => {
  return (
    <nav className={styles.navbarContainer}>
      <ul className={styles.navbar}>
        <li className={styles.navItem}>
          <Link href="/">
            <h1 style={{ fontWeight: highlighted === 'home' ? '900' : '100' }} className={styles.texter}>
              Home
            </h1>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/movies">
            <h1 style={{ fontWeight: highlighted === 'movie' ? '900' : '100' }} className={styles.texter}>Movies</h1>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/series">
            <h1 style={{ fontWeight: highlighted === 'series' ? '900' : '100' }} className={styles.texter}>Series</h1>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/cartoon">
            <h1 style={{ fontWeight: highlighted === 'cartoon' ? '900' : '100' }} className={styles.texter}>
              Cartoon
            </h1>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/creator">
            <h1 style={{ fontWeight: highlighted === 'creator' ? '900' : '100' }} className={styles.texter}>Create my own</h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
