import { Fragment, VFC } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { ReactComponent as ShoppingCartIcon } from '../../../assets/img/icon-cart.svg';
import CustomButton from '../button/CustomButton';
import { Popover, Transition } from '@headlessui/react';
import styles from './cartWidget.module.scss';
import { formatCurrency } from '../../utils/format';

import {
  selectCartItems,
  selectCartItemCount,
  selectCartTotal,
} from '../../../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

const CartWidget: VFC = () => {
  const cartItems = useAppSelector(selectCartItems);
  const itemCount = useAppSelector(selectCartItemCount);
  const cartTotal = useAppSelector(selectCartTotal);
  const navigate = useNavigate();

  return (
    <Popover className={styles.cartWrapper}>
      {({ open, close }) => (
        <>
          <Popover.Button className='cartWidget'>
            <span className='cartWidgetIcon icon'>
              <ShoppingCartIcon />

              {itemCount > 0 && (
                <span className='notificationBadge'>
                  <span className=''>{itemCount}</span>
                </span>
              )}
            </span>
          </Popover.Button>

          {/* The overlay here is used to capture an outside click & prevent (accidentally)
          firing multiple events, such as navigating away from the current page & or adding
          items to the cart when trying to close the cart dropdown! */}

          <Transition as='div' show={open} appear>
            <Transition.Child
              as={Fragment}
              enter='overlayEnter'
              enterFrom='overlayEnterFrom'
              enterTo='overlayEnterTo'
              leave='overlayLeave'
              leaveFrom='overlayLeaveFrom'
              leaveTo='overlayLeaveTo'
            >
              <Popover.Overlay className={`overlay`} />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter='dialogEnter'
              enterFrom='dialogEnterFrom'
              enterTo='dialogEnterTo'
              leave='dialogLeave'
              leaveFrom='dialogLeaveFrom'
              leaveTo='dialogLeaveTo'
            >
              <Popover.Panel>
                <div className='cartDropdown'>
                  {itemCount > 0 ? (
                    <>
                      {/* Cart Items */}
                      <ul className='cartItems'>
                        {cartItems.map(
                          ({ id, name, image, quantity, weight }) => (
                            <li key={id} className='cartItem'>
                              <img
                                src={image}
                                className='cartItemImage'
                                alt={name}
                              />

                              <span className='cartItemName'>
                                {name} <br />
                                <span className='isMuted'>
                                  {weight?.value} {weight.unit}
                                </span>
                              </span>

                              <span className='cartItemQty'>{quantity}</span>
                            </li>
                          )
                        )}
                      </ul>

                      {/* Subtotal */}
                      <div className='cartSubtotal'>
                        <span className='label'>SUBTOTAL</span>
                        <span className='value'>
                          {formatCurrency(cartTotal)}
                        </span>
                      </div>

                      {/* Cart Footer */}
                      <div className='cartFooter'>
                        <CustomButton
                          variant='primary'
                          onClick={() => {
                            navigate('/cart');
                            close();
                          }}
                          fullwidth
                        >
                          Go to cart
                        </CustomButton>
                      </div>
                    </>
                  ) : (
                    <p className='emptyCartText isMuted'>Your cart is empty.</p>
                  )}
                </div>
              </Popover.Panel>
            </Transition.Child>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default CartWidget;
