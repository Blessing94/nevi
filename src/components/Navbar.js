import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import { AiFillCaretDown } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
 
function Navbar () {
  
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  const pages = () => {
    dropdown ? setDropdown(false) : setDropdown(true)
    
  }
  
  const onMouseEnter = () => {
   if(click){
       setDropdown(true);
   } else {
       setDropdown(true)
   }
  };
  const onMouseLeave = () => {
    if(click){
        setDropdown(false);
    } else {
        setDropdown(false)
    }
   };
  
   
   
    return (
        <>
        <nav className='navbar'>
         <Link to='/' className='navbar-logo'> <b>
             NEVI </b>
         </Link> 
        <div className='menu-icon' onClick={handleClick}>
      {click ? <FaTimes className='fa-times'/> : <FaBars className='fa-bars'/>}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu' }>
               
                <li className='nav-item'>
                    <Link to='/' className='nav-Links' onClick={closeMobileMenu}>
                        Home 
                    </Link>
                </li>

                <li className='product-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}>
            <Link
              className='nav-Links'
              onClick={ pages }>
                { dropdown && <Dropdown /> }
            Products <AiFillCaretDown className='fas fa-caret-down'/>
            </Link>
          
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

          <li className='new-nav-item'>
            <Link
              to='/headwear'
              className='nav-Links'
              onClick={closeMobileMenu} >
              Headwear
            </Link>
          </li>
          <li className='new-nav-item'>
            <Link
              to='/dresses'
              className='nav-Links'
              onClick={closeMobileMenu} >
              Dresses
            </Link>
          </li>
          <li className='new-nav-item'>
            <Link
              to='/bags'
              className='nav-Links'
              onClick={closeMobileMenu} >
              Bags
            </Link>
          </li>
          <li className='new-nav-item'>
            <Link
              to='/pants'
              className='nav-Links'
              onClick={closeMobileMenu} >
              Pants
            </Link>
          </li>
          <li className='new-nav-item'>
            <Link
              to='/footwear'
              className='nav-Links'
              onClick={closeMobileMenu} >
              Footwear
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