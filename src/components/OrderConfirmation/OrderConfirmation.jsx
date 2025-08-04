// src/components/order/OrderConfirmation.jsx
import styles from './OrderConfirmation.module.css';

function OrderConfirmation({ items, total, onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>✅ Order Confirmed</h2>
        <p>We hope you enjoy your food!</p>
        <ul className={styles.list}>
          {items.map(item => (
            <li key={item.id} className={styles.item}>
              <span>{item.name}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className={styles.total}>
          <strong>Order Total:</strong>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className={styles.button} onClick={onClose}>Start New Order</button>
      </div>
    </div>
  );
}

export default OrderConfirmation;