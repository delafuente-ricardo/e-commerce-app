import { firestore } from '../../app/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { RootState } from '../../app/store';
import { IProduct } from '../../types';
import {
  createAsyncThunk,
  createSlice,
  createSelector,
} from '@reduxjs/toolkit';

export interface IProductsState {
  products: {
    [key: string]: IProduct;
  };
  isLoading: boolean;
}

const initialState: IProductsState = {
  products: {},
  isLoading: false,
};

export const getProductAsync = createAsyncThunk(
  'products/getProduct',
  async (productId?: string) => {
    if (productId) {
      try {
        const docRef = doc(firestore, 'products', productId);

        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          return {
            [productId]: {
              id: productId,
              ...docSnapshot.data(),
            } as IProduct,
          };
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
);

export const productSlice = createSlice({
  name: 'products',
  initialState,

  reducers: {
    // Redux Toolkit uses the Immer library under the hood to detect changes
    // and produce immutable state, allowing us to write seemingly "mutating"
    // logic in our reducers!
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProductAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProductAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = { ...state.products, ...action.payload };
      });
  },
});

const selectProductState = (state: RootState) => state.products;

export const selectProduct = (productId?: string) =>
  createSelector([selectProductState], ({ products }) => {
    if (productId && products) {
      return products[productId];
    }

    return null;
  });

export const selectIsProductLoading = createSelector(
  [selectProductState],
  ({ isLoading }) => {
    return isLoading;
  }
);

export default productSlice.reducer;
