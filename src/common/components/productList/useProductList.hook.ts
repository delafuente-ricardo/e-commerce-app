import { useEffect, useState, ChangeEvent } from 'react';
import { addToCart } from '../../../features/cart/cartSlice';
import { useAppDispatch } from '../../../app/hooks';
import { IProduct } from '../../../types';

const useProductList = (items: IProduct[]) => {
  const dispatch = useAppDispatch();
  const [searchInput, setSearchInput] = useState('');
  const [filteredItems, setFilteredItems] = useState<IProduct[]>([]);

  useEffect(() => {
    if (searchInput === '') {
      setFilteredItems(items);
    } else {
      // Should consider debouncing this call with larger sets
      setFilteredItems(
        items.filter(({ name }) =>
          name.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    }
  }, [searchInput, items]);

  const onFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filter = e.target.value;

    setSearchInput(filter);
  };

  const onAddToCart = (item: IProduct) => {
    dispatch(addToCart(item));
  };

  return {
    searchInput,
    onFilterChange,
    filteredItems,
    onAddToCart,
  };
};

export default useProductList;
