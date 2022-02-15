import { VFC } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../button/CustomButton';
import SearchField from '../forms/SearchField';
import useProductList from './useProductList.hook';
import { IProduct } from '../../../types';
import styles from './productList.module.scss';
import ProductListItem from './ProductListItem';

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
            {filteredItems.map((item) => (
              <ProductListItem key={item.id} item={item}>
                <CustomButton
                  variant='primary'
                  onClick={() => onAddToCart(item)}
                  fullwidth
                >
                  Add to cart
                </CustomButton>

                <div className='learnMore'>
                  <Link to={`/products/${item.id}`} className='learnMoreLink'>
                    Learn more &gt;
                  </Link>
                </div>
              </ProductListItem>
            ))}
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
