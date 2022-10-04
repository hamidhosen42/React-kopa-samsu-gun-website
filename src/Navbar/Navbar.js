import React from "react";
import "./Navbar.css";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = ({ cart, toggleModal }) => {
  return (
    <nav className='navbar'>
      <h1>Kopa Samsu Store</h1>
      {/* <div className='cart-counter' onClick={toggleModal}>
        <span>{cart.length}</span>
        <BsFillCartFill className='icon' color='#fff' />
      </div> */}
    </nav>
  );
};

export const NavbarDui=()=>{
  return(
    <nav>
      <h1>Dui</h1>
    </nav>
  );
}

export default Navbar;
