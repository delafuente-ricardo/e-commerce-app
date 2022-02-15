import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { incrementCartItemQty, decrementCartItemQty } from './cartUtils';
import { IProduct, ICartItem } from '../../types';
import { remove } from 'lodash';

export interface ICartState {
  items: ICartItem[];
  savedItems: ICartItem[];
}

const initialState: ICartState = {
  items: [],
  savedItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    // Redux Toolkit uses the Immer library under the hood to detect changes
    // and produce immutable state, allowing us to write seemingly "mutating"
    // logic in our reducers!
    addToCart: (state, action: PayloadAction<IProduct>) => {
      state.items = incrementCartItemQty(state.items, action.payload);
    },

    addBulkToCart: (
      state,
      action: PayloadAction<{ product: IProduct; quantity: number }>
    ) => {
      const { product, quantity } = action.payload;

      state.items = incrementCartItemQty(state.items, product, quantity);
    },

    removeFromCart: (state, action: PayloadAction<ICartItem>) => {
      state.items = decrementCartItemQty(state.items, action.payload);
    },

    clearFromCart: (state, action: PayloadAction<ICartItem>) => {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload.id;
      });
    },

    saveItem: (state, action: PayloadAction<ICartItem>) => {
      const savedItem = remove(state.items, (item) => {
        return item.id === action.payload.id;
      });

      const { quantity, ...product } = savedItem[0];

      state.savedItems = incrementCartItemQty(
        state.savedItems,
        product,
        quantity
      );
    },

    restoreItem: (state, action: PayloadAction<ICartItem>) => {
      const savedItem = remove(state.savedItems, (item) => {
        return item.id === action.payload.id;
      });

      if (savedItem?.length) {
        const { quantity, ...product } = savedItem[0];

        state.items = incrementCartItemQty(state.items, product, quantity);
      }
    },
  },
});

export const {
  addToCart,
  addBulkToCart,
  removeFromCart,
  clearFromCart,
  saveItem,
  restoreItem,
} = cartSlice.actions;

const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector([selectCart], (cart) => {
  return cart.items;
});

export const selectSavedItems = createSelector([selectCart], (cart) => {
  return cart.savedItems;
});

export const selectCartItemCount = createSelector([selectCartItems], (items) =>
  items.reduce((accumulator, { quantity }) => {
    return accumulator + quantity;
  }, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (items) =>
  items.reduce((accumulator, { quantity, price }) => {
    return accumulator + quantity * price;
  }, 0)
);

export default cartSlice.reducer;
