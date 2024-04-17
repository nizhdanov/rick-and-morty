import { Link } from '@tanstack/react-router';

import logo from '@/assets/logo.png';
import { SearchBar } from '@/components/SearchBar';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.base}>
      <div className={styles.container}>
        <Link href='/'>
          <img alt='logo' src={logo} />
        </Link>

        <SearchBar />
      </div>
    </header>
  );
};
