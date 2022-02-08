import { VFC, useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { useParams } from 'react-router-dom';
import ProductList from '../../common/components/productList/ProductList';
import { getCategoryAsync } from './categorySlice';
import { useAppSelector } from '../../app/hooks';
import { selectCategory, selectIsCategoryLoading } from './categorySlice';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import Loader from '../../common/components/loader/Loader';

const CategoryPage: VFC = () => {
  const dispatch = useAppDispatch();
  const { category } = useParams();
  const products = useAppSelector(selectCategory(category));
  const isLoading = useAppSelector(selectIsCategoryLoading);
  const breadcrumbs = [{ name: category || '' }];

  useEffect(() => {
    if (!products) {
      dispatch(getCategoryAsync(category));
    }
  }, [dispatch, category, products]);

  return isLoading ? (
    <Loader />
  ) : (
    <section className='categoryPage'>
      <div className='container'>
        <Breadcrumbs items={breadcrumbs} />

        {category && products?.length ? (
          <ProductList title={category} items={products} />
        ) : (
          <div className='emptyTemplate'>
            <p className='isMuted'>No results</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryPage;
