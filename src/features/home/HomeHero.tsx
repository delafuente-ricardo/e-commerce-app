import { VFC } from 'react';
import courierIllust from '../../assets/img/courier-illust.png';
import CustomButton from '../../common/components/button/CustomButton';
import Modal from '../../common/components/modal/modal';
import styles from './homeHero.module.scss';
import AboutContent from './AboutContent';

const HomeHero: VFC = () => {
  return (
    <div className={styles.hero}>
      <div className='container'>
        <div className='heroGrid'>
          <div className='heroContent'>
            <h1 className='heroTitle'>
              Out of stock? You've come to the right place!
            </h1>

            <p className='heroSubtitle'>
              Get the highest quality ingredients delivered to your doortstep
              today.
            </p>
          </div>

          <div className='heroActions'>
            <CustomButton
              variant='secondary'
              onClick={() => {
                window.open(
                  'https://github.com/delafuente-ricardo/e-commerce-app',
                  '_blank'
                );
              }}
            >
              GitHub
            </CustomButton>

            <Modal
              title='About'
              trigger={(open) => (
                <CustomButton onClick={open} variant='primary'>
                  About
                </CustomButton>
              )}
            >
              <AboutContent />
            </Modal>
          </div>

          <div className='heroIllust'>
            <img src={courierIllust} alt='Courier illustration' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
