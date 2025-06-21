import { useCart } from '../../context/CartContext'
import styles from './CartSidebar.module.css';

function CartSidebar({ onClose }) {
  const { cartItems, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useCart();



  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div>

      <div className={styles.sidebar}>
        <button className={styles.close} onClick={onClose}>✕</button>
        <h2>Tu carrito</h2>

        {cartItems.length === 0 ? (
          <p className={styles.empty}>El carrito está vacío.</p>
        ) : (
          <>
            <ul className={styles.list}>
              {cartItems.map((item) => (
                <li key={item.id} className={styles.item}>
                  <img src={item.image.thumbnail} alt={item.name} />
                  <div>
                    <p>{item.name}</p>
                     <div className={styles.controls}>
                      <button onClick={() => decreaseQuantity(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                    <p>${(item.quantity * item.price).toFixed(2)}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>🗑️</button>
                </li>
              ))}
            </ul>
            <div className={styles.total}>
              <strong>Total: ${totalPrice.toFixed(2)}</strong>
              <button onClick={clearCart}>Vaciar carrito</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CartSidebar;