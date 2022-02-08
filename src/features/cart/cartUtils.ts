import { IProduct, ICartItem } from '../../types';

export const incrementCartItemQty = (
  cartItems: ICartItem[],
  cartItemToAppend: IProduct,
  itemQuantity: number = 1
): ICartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAppend.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAppend.id
        ? { ...cartItem, quantity: cartItem.quantity + itemQuantity }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAppend, quantity: itemQuantity }];
};

export const decrementCartItemQty = (
  cartItems: ICartItem[],
  cartItemToRemove: ICartItem
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
