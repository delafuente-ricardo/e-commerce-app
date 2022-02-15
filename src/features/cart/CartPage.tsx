import { VFC } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import CustomButton from '../../common/components/button/CustomButton';
import Modal from '../../common/components/modal/modal';
import { formatCurrency } from '../../common/utils/format';
import styles from './cartPage.module.scss';
import { TrashIcon } from '@heroicons/react/outline';

import {
  selectCartItems,
  selectCartItemCount,
  selectCartTotal,
  addToCart,
  removeFromCart,
  clearFromCart,
  saveItem,
} from './cartSlice';
import SavedItems from './SavedItems';

const CartPage: VFC = () => {
  const breadcrumbs = [{ name: 'Cart' }];
  const cartItems = useAppSelector(selectCartItems);
  const itemCount = useAppSelector(selectCartItemCount);
  const cartTotal = useAppSelector(selectCartTotal);
  const dispatch = useAppDispatch();

  return (
    <section className={styles.cartPage}>
      <div className='container'>
        <Breadcrumbs items={breadcrumbs} />

        <h2 className='title'>Shopping Cart</h2>

        {itemCount > 0 ? (
          <>
            {/* Cart Items */}
            <ul className='cartItems'>
              {cartItems.map((item) => {
                const { id, name, price, image, quantity, weight } = item;

                return (
                  <li key={id} className='cartItem'>
                    <Link to={`/products/${item.id}`}>
                      <img src={image} className='itemImage' alt={name} />
                    </Link>

                    <div className='flexGroup'>
                      <Link to={`/products/${item.id}`} className='itemName'>
                        {name}
                      </Link>

                      <span className='itemWeight isMuted'>
                        {weight?.value} {weight.unit}
                      </span>

                      <div className='itemSubActions'>
                        <span
                          className='saveItem'
                          onClick={() => dispatch(saveItem(item))}
                        >
                          Save for later
                        </span>

                        <span
                          className='clearItem'
                          onClick={() => dispatch(clearFromCart(item))}
                        >
                          <TrashIcon className='linkIcon' /> Delete
                        </span>
                      </div>
                    </div>

                    <div className='itemQty'>
                      <div className='qtyControl'>
                        <button
                          className='qtyControlButton'
                          onClick={() => dispatch(removeFromCart(item))}
                        >
                          -
                        </button>
                        <span className='qtyControlValue'>{quantity}</span>
                        <button
                          className='qtyControlButton'
                          onClick={() => dispatch(addToCart(item))}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className='itemPrice'>
                      <span>{formatCurrency(price * quantity)}</span>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Subtotal */}
            <div className='cartSubtotal'>
              <div className='level'>
                <div className='levelLeft'>
                  <span className='subtotalLabel'>
                    SUBTOTAL ({itemCount} items):
                  </span>
                </div>
                <div className='levelRight'>
                  <span className='subtotalValue'>
                    {formatCurrency(cartTotal)}
                  </span>
                </div>
              </div>
            </div>

            {/* Cart Footer */}
            <div className='cartFooter'>
              <Modal
                title="Well... that's it for now!"
                trigger={(open) => (
                  <CustomButton onClick={open} variant='primary' fullwidth>
                    Proceed to checkout
                  </CustomButton>
                )}
              >
                <p>
                  Thank you for checking out my project! While I am considering
                  integrating with Stripe and or similar platforms (among other
                  features) in the future, this is as far as it currently goes.
                  Feel free to back-track and play with some of the other pages
                  in the mean time!
                </p>
              </Modal>
            </div>
          </>
        ) : (
          <div className='emptyTemplate'>
            <p className='isMuted'>Your cart is empty.</p>
          </div>
        )}

        <SavedItems />
      </div>
    </section>
  );
};

export default CartPage;
