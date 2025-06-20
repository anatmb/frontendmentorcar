import { useCart } from '../../context/CartContext';

function Header() {
  const { cartCount } = useCart();

  return (
    <header>
      <h1>Product List</h1>
      <div>
        🛒 Cart: <strong>{cartCount}</strong>
      </div>
    </header>
  );
}

export default Header;