import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './common/components/layout/Header';
import Footer from './common/components/layout/Footer';
import CategoryPage from './features/category/CategoryPage';
import HomePage from './features/home/HomePage';
import ProductPage from './features/product/ProductPage';
import CartPage from './features/cart/CartPage';
import './app.scss';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='wrapper'>
          <Header />

          <main className='content'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/categories/:category' element={<CategoryPage />} />
              <Route path='/products/:productId' element={<ProductPage />} />
              <Route path='/cart' element={<CartPage />} />
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
