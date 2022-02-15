import { VFC } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import CustomButton from '../../common/components/button/CustomButton';
import ProductListItem from '../../common/components/productList/ProductListItem';
import styles from './savedItems.module.scss';

import { selectSavedItems, restoreItem } from './cartSlice';

const SavedItems: VFC = () => {
  const savedItems = useAppSelector(selectSavedItems);
  const dispatch = useAppDispatch();

  return savedItems?.length > 0 ? (
    <div className={styles.savedItems}>
      <h2 className='title'>Recently Removed</h2>

      <div className='collection'>
        <ul className='collectionList'>
          {savedItems.map((item) => (
            <ProductListItem key={item.id} item={item}>
              <CustomButton
                onClick={() => dispatch(restoreItem(item))}
                fullwidth
              >
                Restore {item.quantity > 1 && `(${item.quantity})`}
              </CustomButton>
            </ProductListItem>
          ))}
        </ul>
      </div>
    </div>
  ) : null;
};

export default SavedItems;
