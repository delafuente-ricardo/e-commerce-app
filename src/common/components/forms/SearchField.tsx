import { VFC, InputHTMLAttributes } from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import styles from './searchField.module.scss';

const SearchField: VFC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return (
    <div className={styles.searchControl}>
      <span className='searchFieldIcon'>
        <SearchIcon />
      </span>

      <input type='search' className='searchField' {...props} />
    </div>
  );
};

export default SearchField;
