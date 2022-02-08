import { VFC } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/img/logo.svg';
import CartWidget from '../cartWidget/CartWidget';
import styles from './header.module.scss';

const Header: VFC = () => {
  return (
    <header className={styles.header}>
      <nav className='navbar'>
        <div className='container'>
          <div className='navbarMenu'>
            {/* Navbar Left */}
            <div className='navbarStart'>
              <Link to='/' className='navbarItem'>
                <Logo className='brandLogo' />
                <span className='brandName'>FOOD MART</span>
              </Link>
            </div>

            {/* Navbar Right */}
            <div className='navbarEnd'>
              <div className='navbarItem'>
                <CartWidget />
              </div>

              {/* TODO: User Menu */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
