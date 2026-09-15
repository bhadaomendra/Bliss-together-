import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ProductsPage } from './pages/ProductsPage';
import { BehindProduct } from './pages/BehindProduct';
import { Journal } from './pages/Journal';
import { Contact } from './pages/Contact';
import { pageSeoData } from './data/site';
import { Product } from './data/products';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname || '/');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    let key = 'home';
    if (currentPath === '/about') key = 'about';
    else if (currentPath === '/products') key = 'products';
    else if (currentPath === '/behind-the-product') key = 'behind';
    else if (currentPath === '/journal') key = 'journal';
    else if (currentPath === '/contact') key = 'contact';

    const seo = pageSeoData[key];
    if (seo) {
      document.title = seo.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', seo.description);
      }
    }
  }, [currentPath]);

  const renderPage = () => {
    switch (currentPath) {
      case '/about':
        return <About onNavigate={navigateTo} />;
      case '/products':
        return <ProductsPage onNavigate={navigateTo} onQuickView={setSelectedProduct} />;
      case '/behind-the-product':
        return <BehindProduct onNavigate={navigateTo} />;
      case '/journal':
        return <Journal onNavigate={navigateTo} />;
      case '/contact':
        return <Contact />;
      case '/':
      default:
        return <Home onNavigate={navigateTo} onQuickView={setSelectedProduct} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-cream-bg)' }}>
      <Header currentPath={currentPath} onNavigate={navigateTo} />
      <div style={{ flex: 1 }}>
        {renderPage()}
      </div>
      <Footer onNavigate={navigateTo} />
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

export default App;

