import './App.css'
import ProductCard from './components/ProductCard';
import data from './data/data.json';
import Header from './components/header/Header';
import FilterPanel from './components/filterPanel/FilterPanel';
import { useState, useMemo } from 'react';

function App() {
   const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  

    // Sacar todas las categorías únicas del data
  const categories = useMemo(() => {
    const cats = data.map((p) => p.category.toLowerCase());
    return [...new Set(cats)];
  }, []);

 // Filtrar productos según categoría y búsqueda
  const filteredProducts = useMemo(() => {

      console.log("🔎 Filtrando con categoría:", selectedCategory);
  console.log("🔎 Filtrando con término:", searchTerm);
    return data.filter((product) => {
      const matchCategory =
        selectedCategory === 'all' ||
        product.category.toLowerCase() === selectedCategory;

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
      

        <main style={{ flexGrow: 1, padding: '1rem' }}>
          <h1>Desserts</h1>
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {filteredProducts.length === 0 && <p>No hay productos.</p>}
          </div>
        </main>

          <FilterPanel
           categories={categories}
           selectedCategory={selectedCategory}
           searchTerm={searchTerm}
           onCategorySelect={setSelectedCategory}
           onSearch={setSearchTerm}
        />



      </div>
    </div>

    </>
  )
}

export default App
