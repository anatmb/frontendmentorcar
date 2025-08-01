import { useCart } from '../context/CartContext'; // Ajustá la ruta si es distinta

function ConfirmButton() {
  const { cartItems } = useCart();

  const handleConfirm = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/payment/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cartItems.map((item) => ({
            title: item.title,
            quantity: item.quantity,
            unit_price: item.price, // Asegurate que `item.price` exista
          })),
        }),
      });

      const data = await response.json();

      if (data.init_point) {
        window.location.href = data.init_point;
      } else {
        alert('No se pudo generar el link de pago');
      }
    } catch (error) {
      console.error('Error al confirmar pedido:', error);
      alert('Ocurrió un error al confirmar el pedido');
    }
  };

  return (
    <button onClick={handleConfirm} className="btn btn-primary">
      Confirmar pedido
    </button>
  );
}

export default ConfirmButton;