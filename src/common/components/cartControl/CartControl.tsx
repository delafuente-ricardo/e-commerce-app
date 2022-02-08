import { VFC } from 'react';
import { formatCurrency } from '../../utils/format';
import CustomButton from '../button/CustomButton';
import useCartControl from './useCartControl.hook';
import { IProduct } from '../../../types';
import styles from './cartControl.module.scss';

interface ICartControlProps {
  product: IProduct;
}

const CartControl: VFC<ICartControlProps> = ({ product }) => {
  const {
    minQuantity,
    maxQuantity,
    increaseQuantity,
    decreaseQuantity,
    addToCartHandler,
    quantity,
  } = useCartControl();

  return product ? (
    <div className={styles.cartControl}>
      <div className='level'>
        {/* Price & weight */}
        <div className='levelLeft'>
          <span className='itemPrice'>{formatCurrency(product.price)}</span>
          <span className='itemWeight isMuted'>
            {product.weight.value} {product.weight.unit}
          </span>
        </div>

        {/* Number input */}
        <div className='levelRight'>
          <div className='qtyControl'>
            <button
              className='qtyControlButton'
              disabled={quantity <= minQuantity}
              onClick={decreaseQuantity}
            >
              -
            </button>
            <span className='qtyControlValue'>{quantity}</span>
            <button
              className='qtyControlButton'
              disabled={quantity >= maxQuantity}
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <CustomButton
        fullwidth
        variant='primary'
        onClick={() => {
          addToCartHandler(product);
        }}
      >
        Add to cart
      </CustomButton>
    </div>
  ) : (
    <p className='missingProduct'>
      <span className='isMuted'>Oops! looks like something went wrong...</span>
    </p>
  );
};

export default CartControl;
