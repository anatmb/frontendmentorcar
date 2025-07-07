import React from 'react'
import styles from './ProductCard.module.css';
 import { useCart } from '../context/CartContext';


// function ProductCard({ product }) {
//    const { addToCart } = useCart();

//   return (
//     <div className={styles.card}>
//       <img
//         src={product.image.thumbnail}
//         alt={product.name}
//         className={styles.image}
//       />
//       <h2 className={styles.name}>{product.name}</h2>
//       <p className={styles.price}>${product.price.toFixed(2)}</p>
//       <button className={styles.button}  onClick={() => addToCart(product)}>
//         Add to Cart
//       </button>
//     </div>
//   )
// }

// export default ProductCard


//import { useCart } from '../../context/CartContext';

function ProductCard({ product }) {
  const {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const itemInCart = cartItems.find((item) => item.id === product.id);
  const quantity = itemInCart?.quantity || 0;

  const handleAdd = () => {
    if (quantity === 0) {
      addToCart(product);
    } else {
      increaseQuantity(product.id);
    }
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      decreaseQuantity(product.id);
    }
  };

  return (
    <div className={styles.card}>
      <img src={product.image.desktop} alt={product.name}   className={styles.image} />
      <div className="product-info quantity-control">
        
        {quantity === 0 ? (
          <button className={styles['add-to-cart-btn']} onClick={handleAdd}>
            🛒 Add to Cart
          </button>
        ) : (
          <div className={styles['quantity-control']}>
            <button onClick={handleDecrease}>−</button>
            <span>{quantity}</span>
            <button onClick={handleAdd}>＋</button>
          </div>
        )}


        <p className="category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="price">${product.price.toFixed(2)}</p>

      </div>
    </div>
  );
}

export default ProductCard;