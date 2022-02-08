import { useEffect, useState, VFC } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import Loader from '../../common/components/loader/Loader';
import NutritionData from '../../common/components/nutritionData/NutritionData';
import CartControl from '../../common/components/cartControl/CartControl';
import { IBreadcrumb } from '../../types';
import styles from './productPage.module.scss';

import {
  getProductAsync,
  selectProduct,
  selectIsProductLoading,
} from './productSlice';

const ProductPage: VFC = () => {
  const { productId } = useParams();
  const product = useAppSelector(selectProduct(productId));
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumb[]>([]);
  const isLoading = useAppSelector(selectIsProductLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!product) {
      dispatch(getProductAsync(productId));
    } else {
      const { category, name } = product;

      setBreadcrumbs([
        {
          name: category,
          path: `/categories/${category}`,
        },
        { name },
      ]);
    }
  }, [productId, product, dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    <section className={styles.productPage}>
      <div className='container'>
        <Breadcrumbs items={breadcrumbs} />

        {product ? (
          <div className='productContainer'>
            {/* Product Image・Banner */}
            <div className='productCover'>
              <div className='backdrop' />
              <img
                src={product.image}
                className='productImage'
                alt={product.name}
              />
            </div>

            {/* Name, Desc, Nutrition */}
            <div className='productData'>
              <h2 className='productName title'>{product.name}</h2>

              <p className='productDesc'>{product.desc[0]}</p>

              <NutritionData nutritionData={product.nutrition} />
            </div>

            <div className='cartActions'>
              <CartControl product={product} />
            </div>
          </div>
        ) : (
          <div className='emptyTemplate'>
            <p className='isMuted'>No results</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductPage;
