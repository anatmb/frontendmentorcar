import './App.css'
import ProductCard from './components/ProductCard';
import data from './data/data.json';

function App() {


  return (
    <>
 <div className="app">
      <h1>Product List</h1>
      <div className="product-grid">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    </>
  )
}

export default App
