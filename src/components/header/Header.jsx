import { useCart } from '../../context/CartContext';

import { useState } from 'react';
import CartDropdown from '../cartDropdown/CartDropdown';
import CartSidebar from '../cartsidebar/CartSidebar';


function Header() {
  const { cartCount } = useCart();
  // const [isOpen, setIsOpen] = useState(false);
   const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header style={{ padding: '1rem', position: 'relative' }}>
      <h1>Product List</h1>
       <button onClick={() => setIsCartOpen(true)}>
        🛒 ({cartCount})
       </button>
   {isCartOpen && ( <CartSidebar onClose={() =>setIsCartOpen(false)} /> )}
    </header>
  );
}

export default Header;