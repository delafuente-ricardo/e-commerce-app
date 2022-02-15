import { FC } from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/format';
import { IProduct } from '../../../types';
import styles from './productListItem.module.scss';

interface IProductListItemProps {
  item: IProduct;
}

const ProductListItem: FC<IProductListItemProps> = ({ item, children }) => {
  const { id, name, image, price, weight } = item;

  return (
    <li key={id} className={`collectionItem ${styles.productListItem}`}>
      <Link to={`/products/${item.id}`}>
        <span className='itemLabel'>{name}</span>

        <div className='itemContainer hasShadow'>
          <div className='imageWrapper'>
            <img src={image} className='itemImage' alt={name} />
          </div>
        </div>
      </Link>

      <div className='itemFooter'>
        <div className='level itemDetails'>
          <span className='levelLeft itemPrice'>{formatCurrency(price)}</span>
          <span className='levelRight itemWeight isMuted'>
            {weight.value} {weight.unit}
          </span>
        </div>

        {/* Item Actions・Footer */}
        {children}
      </div>
    </li>
  );
};

export default ProductListItem;
