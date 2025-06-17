import React from 'react'

function ProductCard() {
  return (
    <div>
         <div className={styles.card}>
      <img
        src="https://via.placeholder.com/150"
        alt="Product"
        className={styles.image}
      />
      <h2 className={styles.name}>Product Name</h2>
      <p className={styles.price}>$99.99</p>
      <button className={styles.button}>Add to Cart</button>
    </div>
    </div>
  )
}

export default ProductCard