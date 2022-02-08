import { VFC } from 'react';
import styles from './footer.module.scss';

const Footer: VFC = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <p className='copyright'>
          &copy; {new Date().getFullYear()} Ricardo De la Fuente
        </p>

        <p className='credits'>
          Graphics created by{' '}
          <a
            href='https://www.flaticon.com/'
            target='_blank'
            rel='noreferrer'
            className='footerLink'
          >
            Flaticon
          </a>
          <span> &amp; </span>
          <a
            href='https://www.freepik.com/'
            target='_blank'
            rel='noreferrer'
            className='footerLink'
          >
            Freepik
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
