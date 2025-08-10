import { useCart } from '../../context/CartContext';
import styles from './CartSidebar.module.css';
import { useState } from 'react';
import OrderConfirmation from '../OrderConfirmation/OrderConfirmation';

function CartSidebar({ onClose }) {
  const { cartItems, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useCart();

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmedItems, setConfirmedItems] = useState([]); // ✅ Aquí guardamos los productos confirmados

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleConfirmOrder = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cartItems }),
      });

      if (!response.ok) throw new Error('Error en el pedido');

      // const data = await response.json();

      setConfirmedItems(cartItems); // ✅ Guardamos lo que se compró
      setShowConfirmation(true);
      clearCart(); // ✅ Después de guardar, vaciamos el carrito
    } catch (error) {
      console.error('Error al confirmar pedido:', error);
    }
  };

  // ✅ Mostrar pantalla de confirmación
  if (showConfirmation) {
    const totalConfirmed = confirmedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    return (
      <OrderConfirmation
        items={confirmedItems}
        total={totalConfirmed}
        onClose={() => {
          setShowConfirmation(false);
          onClose();
        }}
      />
    );
  }

  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.sidebar}>
        <button className={styles.close} onClick={onClose}>✕</button>
        <h2>Your Cart ( {cartItems.length } )</h2>
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
            <div className={styles.confirmar}>
              <button className={styles['add-to-cart-btn']} onClick={handleConfirmOrder}>
                Confirmar orden
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CartSidebar;