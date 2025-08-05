
import './Header.css';
import { useState } from 'react';
import CartDropdown from '../cartDropdown/CartDropdown';
import CartSidebar from '../cartsidebar/CartSidebar';
import { useCart } from '../../context/CartContext';


function Header() {
  const { cartCount } = useCart();
  // const [isOpen, setIsOpen] = useState(false);
   const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className='header'>
      <h1 className='logo'>Pasteleria</h1>
       <button onClick={() => setIsCartOpen(true)}>
        🛒 ({cartCount})
       </button>
   {isCartOpen && ( <CartSidebar onClose={() =>setIsCartOpen(false)} /> )}
    </header>
  );
}

export default Header;