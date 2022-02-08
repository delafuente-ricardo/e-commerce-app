import { VFC } from 'react';
import styles from './loader.module.scss';

const Loader: VFC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loadingDots}>
        <span className='fallback'>Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
