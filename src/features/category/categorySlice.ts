import { firestore } from '../../app/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { RootState } from '../../app/store';
import { IProduct } from '../../types';
import {
  createAsyncThunk,
  createSlice,
  createSelector,
} from '@reduxjs/toolkit';

export interface ICategoriesState {
  categories: {
    [key: string]: {
      name: string;
      items: IProduct[];
    };
  };
  isLoading: boolean;
}

const initialState: ICategoriesState = {
  categories: {},

  isLoading: false,
};

export const getCategoryAsync = createAsyncThunk(
  'categories/getCategory',
  async (category?: string) => {
    if (category) {
      try {
        const collectionRef = collection(firestore, 'products');

        const productQuery = query(
          collectionRef,
          where('category', '==', category)
        );

        const collectionSnapshot = await getDocs(productQuery);

        const products: IProduct[] = [];

        collectionSnapshot.forEach((doc) => {
          products.push({ id: doc.id, ...doc.data() } as IProduct);
        });

        return {
          [category]: {
            name: category,
            items: products,
          },
        };
      } catch (error) {
        console.log(error);
      }
    }
  }
);

export const categorySlice = createSlice({
  name: 'categories',
  initialState,

  reducers: {
    // Redux Toolkit uses the Immer library under the hood to detect changes
    // and produce immutable state, allowing us to write seemingly "mutating"
    // logic in our reducers!
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCategoryAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCategoryAsync.fulfilled, (state, action) => {
        state.isLoading = false;

        state.categories = {
          ...state.categories,
          ...action.payload,
        };
      });
  },
});

const selectCategoryState = (state: RootState) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryState],
  ({ categories }) => {
    return Object.keys(categories).map((key) => {
      const { items, ...data } = categories[key];
      return data;
    });
  }
);

export const selectCategory = (category?: string) =>
  createSelector([selectCategoryState], ({ categories }) => {
    if (category && categories) {
      return categories[category]?.items;
    }

    return null;
  });

export const selectIsCategoryLoading = createSelector(
  [selectCategoryState],
  ({ isLoading }) => {
    return isLoading;
  }
);

export default categorySlice.reducer;
