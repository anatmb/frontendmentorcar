import './App.css'
import ProductCard from './components/ProductCard';
import data from './data/data.json';
import Header from './components/header/Header';
import FilterPanel from './components/filterPanel/FilterPanel';
import { useState, useMemo } from 'react';

function App() {
   const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  

    // Sacar todas las categorías únicas del data
  const categories = useMemo(() => {
    const cats = data.map((p) => p.category.toLowerCase());
    return [...new Set(cats)];
  }, []);

 // Filtrar productos según categoría y búsqueda
  const filteredProducts = useMemo(() => {
    console.log("🔍 selectedCategory:", selectedCategory);
console.log("🔍 searchTerm:", searchTerm);
console.log("🔍 categories in data:", data.map(p => p.category));
    return data.filter((product) => {
      const matchCategory =
        selectedCategory === 'All' ||
        product.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchTerm]);



  return (
    <>
    <div className="app">
      <Header />
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <FilterPanel
          categories={categories}
          onCategorySelect={setSelectedCategory}
          onSearch={setSearchTerm}
        />

        <main style={{ flexGrow: 1, padding: '1rem' }}>
          <h1>Product List</h1>
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {filteredProducts.length === 0 && <p>No hay productos.</p>}
          </div>
        </main>
      </div>
    </div>

    </>
  )
}

export default App
