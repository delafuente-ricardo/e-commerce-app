import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import categoryReducer from '../features/category/categorySlice';
import cartReducer from '../features/cart/cartSlice';
import productReducer from '../features/product/productSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    cart: cartReducer,
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
