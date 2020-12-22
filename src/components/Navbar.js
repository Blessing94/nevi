import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import { AiFillCaretDown } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
 
function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  const onMouseEnter = () => {
   if(window.innerWidth < 960){
       setDropdown(true);
   } else {
       setDropdown(true)
   }
  };
  const onMouseLeave = () => {
    if(window.innerWidth < 960){
        setDropdown(false);
    } else {
        setDropdown(false)
    }
   };

    return (
        <>
        <nav className='navbar'>
         <Link to='/' className='navbar-logo'>
             Nevi
         </Link> 
        <div className='menu-icon' onClick={handleClick}>
      {click ? <FaTimes className='fa-times'/> : <FaBars className='fa-bars'/>}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               
                <li className='nav-item'>
                    <Link to='/' className='nav-Links' onClick={closeMobileMenu}>
                        Home 
                    </Link>
                </li>
                <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/products'
              className='nav-Links'
              onClick={closeMobileMenu}
            >
              Products <AiFillCaretDown className='fas fa-caret-down'/>
            </Link>
            {dropdown && <Dropdown />}
            
          </li>

          <li className='nav-item'>
            <Link
              to='/custom-design'
              className='nav-Links'
              onClick={closeMobileMenu}
            >
              Custom Design
            </Link>
          </li>
          
         
                <li>
                    <Link to='/Sign-up' className='nav-Links-mobile' onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul>
            <Button />
        </nav>
        </>
 );
}
export default Navbar;