import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import CartIcon from '../../cart-icon/cart-icon.components';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';

import './header.styles.scss';
import Cart from '../../cart-dropdown/card-dropdown.component';



const Header = ({currentUser , hidden}) => (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {
          currentUser ? 
          <div className="option" onClick={() => auth.signOut()}> SIGNOUT </div>
          :
          <Link className="option" to="/signin"> SIGN IN</Link>


        }
      <CartIcon />
      </div>

    {
      hidden ? null :
      <Cart />
      }
      
    </div>
  );
  
  const mapStateToProps = ({user : {currentUser} , cart : {hidden}}) => ({
    currentUser,
    hidden
  })
  export default connect(mapStateToProps)(Header);
  