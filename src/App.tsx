import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './common/components/layout/Header';
import Footer from './common/components/layout/Footer';
import Loader from './common/components/loader/Loader';
import './app.scss';

const CategoryPage = lazy(() => import('./features/category/CategoryPage'));
const HomePage = lazy(() => import('./features/home/HomePage'));
const ProductPage = lazy(() => import('./features/product/ProductPage'));
const CartPage = lazy(() => import('./features/cart/CartPage'));

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <Header />

        <main className='content'>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/categories/:category' element={<CategoryPage />} />
              <Route path='/products/:productId' element={<ProductPage />} />
              <Route path='/cart' element={<CartPage />} />
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
