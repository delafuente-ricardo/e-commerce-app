import { VFC } from 'react';
import { Link } from 'react-router-dom';
import useBreadcrumbs from './useBreadcrumbs.hook';
import { IBreadcrumb } from '../../../types';
import styles from './breadcrumbs.module.scss';

interface IBreadcrumbsProps {
  items: IBreadcrumb[];
}

const Breadcrumbs: VFC<IBreadcrumbsProps> = ({ items }) => {
  const { stepBack, isActive } = useBreadcrumbs();

  return items?.length ? (
    <div className={styles.breadcrumbsNav}>
      <div className='level'>
        {
          /* Back button */
          items?.length && (
            <div className='levelLeft isNarrow'>
              <button onClick={stepBack} className='backButton'>
                &lt; Back
              </button>
            </div>
          )
        }

        {/* Breadcrumbs */}
        <div className='levelRight'>
          <ul className='breadcrumbs'>
            {/* Always include the 'home' link */}
            <li className='breadcrumb'>
              <Link to='/' className='breadcrumbLink'>
                Home
              </Link>
            </li>

            {items.map(({ name, path }, i) => (
              <li key={i} className='breadcrumb'>
                {!path || isActive(path) ? (
                  <span className='breadcrumbText isMuted'>{name}</span>
                ) : (
                  <Link to={path} className='breadcrumbLink'>
                    {name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : null;
};

export default Breadcrumbs;
