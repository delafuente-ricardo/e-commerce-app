import { VFC } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../button/CustomButton';
import SearchField from '../forms/SearchField';
import useProductList from './useProductList.hook';
import { formatCurrency } from '../../utils/format';
import { IProduct } from '../../../types';
import styles from './productList.module.scss';

interface IProductListProps {
  title: string;
  items: IProduct[];
}

const ProductList: VFC<IProductListProps> = ({ title, items }) => {
  const { onFilterChange, filteredItems, onAddToCart } = useProductList(items);

  return (
    <div className={styles.productList}>
      <div className='collection'>
        <h2 className='title'>{title}</h2>

        <SearchField
          placeholder='Search by name...'
          onChange={onFilterChange}
        />

        {filteredItems?.length ? (
          <ul className='collectionList'>
            {filteredItems.map((item) => {
              const { id, name, image, price, weight } = item;

              return (
                <li key={id} className='collectionItem'>
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
                      <span className='levelLeft itemPrice'>
                        {formatCurrency(price)}
                      </span>
                      <span className='levelRight itemWeight isMuted'>
                        {weight.value} {weight.unit}
                      </span>
                    </div>

                    <CustomButton
                      variant='primary'
                      onClick={() => onAddToCart(item)}
                      fullwidth
                    >
                      Add to cart
                    </CustomButton>

                    <div className='learnMore'>
                      <Link
                        to={`/products/${item.id}`}
                        className='learnMoreLink'
                      >
                        Learn more &gt;
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className='emptyTemplate'>
            <p className='noResults'>
              <strong>No results found!</strong>

              <span className='isMuted'>
                Please adjust your search or select a different category.
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
