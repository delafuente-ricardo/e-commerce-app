import { VFC } from 'react';
import styles from './aboutContent.module.scss';

const AboutContent: VFC = () => (
  <>
    <h4 className={styles.heading}>What is Food Mart?</h4>

    <p className={styles.paragraph}>
      Food Mart is a personal project wherein I am exploring the concept of
      online grocery shopping; a theme which has been growing in popularity
      since the start of Covid. As both a playground &amp; portfolio
      application, many features have been deliberately over-engineered (while
      others remain relatively under developed) for testing, learning, and
      demonstration purposes.
    </p>

    <h4 className={styles.heading}>What Food Mart is not:</h4>

    <p className={styles.paragraph}>
      This is by no means a complete example &amp; you CANNOT make any actual
      purchases. I've also skipped over many of the features that would likely
      be present in a real, production-ready e-commerce website (e.g.payment
      processing, shipment tracking, etc). While I may continue to implement
      features, they'll likely remain in testing/sandboxed-mode.
    </p>
  </>
);

export default AboutContent;
