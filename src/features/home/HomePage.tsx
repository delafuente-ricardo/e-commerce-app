import { VFC } from 'react';
import HomeHero from './HomeHero';
import CategoryList from '../../common/components/categoryList/CategoryList';
import { categories } from '../category/categoryData';
// import { seedProducts } from '../../common/utils/firebase';
// import { products } from '../category/itemData';

const HomePage: VFC = () => {
  return (
    <>
      <HomeHero />

      {/* <button onClick={() => seedProducts(products as any)}>Upload</button> */}

      <section className='container'>
        {/* All Categories */}
        <CategoryList title='Categories' items={categories} />
      </section>
    </>
  );
};

export default HomePage;
