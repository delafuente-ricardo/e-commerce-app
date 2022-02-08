import { useState } from 'react';
import { addBulkToCart } from '../../../features/cart/cartSlice';
import { IProduct } from '../../../types';
import { useAppDispatch } from '../../../app/hooks';

const useCartControl = (minQuantity = 1, maxQuantity = 5) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((qty) => (qty < maxQuantity ? qty + 1 : qty));
  };

  const decreaseQuantity = () => {
    setQuantity((qty) => (qty >= minQuantity ? qty - 1 : qty));
  };

  const addToCartHandler = (item: IProduct) => {
    dispatch(addBulkToCart({ product: item, quantity }));

    // Reset to the min amount
    setQuantity(minQuantity);
  };

  return {
    minQuantity,
    maxQuantity,
    increaseQuantity,
    decreaseQuantity,
    addToCartHandler,
    quantity,
  };
};

export default useCartControl;
