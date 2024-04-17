import { SearchIcon } from '../icons';

import styles from './SearchBar.module.css';

export const SearchBar = () => {
  return (
    <div className={styles.base}>
      <input placeholder='Search...' />
      <SearchIcon />
    </div>
  );
};
