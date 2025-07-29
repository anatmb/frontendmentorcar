import { useCart } from '../../context/CartContext'
import styles from './CartDropdown.module.css';

function CartDropdown() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <div className={styles.dropdown}>Tu carrito está vacío.</div>;
  }

  return (
    <div className={styles.dropdown}>
      <h3>Carritoooooooooo</h3>
      <ul className={styles.list}>
        {cartItems.map((item) => (
          <li key={item.id} className={styles.item}>
            <img src={item.image.thumbnail} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <p>
                {item.quantity} × ${item.price.toFixed(2)}
              </p>
            </div>
            <button onClick={() => removeFromCart(item.id)}>✕</button>
          </li>
        ))}
      </ul>
      <div className={styles.footer}>
        <strong>Total: ${totalPrice.toFixed(2)}</strong>
        <button onClick={clearCart}>Vaciar carrito</button>
      </div>
    </div>
  );
}

export default CartDropdown;