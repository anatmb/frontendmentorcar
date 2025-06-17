import './App.css'
import ProductCard from './components/ProductCard';

function App() {


  return (
    <>
   <div className="app">
      <h1>Product List</h1>
      <div className="product-grid">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
    </>
  )
}

export default App
