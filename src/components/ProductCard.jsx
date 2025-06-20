import React from 'react'
import styles from './ProductCard.module.css';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
   const { addToCart } = useCart();

  return (
    <div className={styles.card}>
      <img
        src={product.image.thumbnail}
        alt={product.name}
        className={styles.image}
      />
      <h2 className={styles.name}>{product.name}</h2>
      <p className={styles.price}>${product.price.toFixed(2)}</p>
      <button className={styles.button}  onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard