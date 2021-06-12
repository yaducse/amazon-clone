import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{ basket, user }] = useStateValue();

  const logout = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      {/* logo  */}
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
          className="header__logo"
        />
      </Link>
      {/* search bar */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* 3 links */}
      <div className="header__nav">
        {/* 1st link */}
        <Link to={!user && '/login'} className="header__navLink">
          <div onClick={logout} className="header__navOption">
            <span className="header__navOptionLineOne">
              Hello {user?.email}
            </span>
            <span className="header__navOptionLineTwo">
              {user ? 'Sign In' : 'Sign Out'}
            </span>
          </div>
        </Link>
        {/* 2nd link */}
        <Link to="/" className="header__navLink">
          <div className="header__navOption">
            <span className="header__navOptionLineOne">Returns</span>
            <span className="header__navOptionLineTwo">& Orders</span>
          </div>
        </Link>
        {/* 3rd link */}
        <Link to="/" className="header__navLink">
          <div className="header__navOption">
            <span className="header__navOptionLineOne">Your</span>
            <span className="header__navOptionLineTwo">Prime</span>
          </div>
        </Link>
        {/* cart */}
        <Link to="/checkout" className="header__navLink">
          <div className="header__navOptionBasket">
            <ShoppingCartOutlinedIcon />
            <span className="header__navOptionLineTwo header__navOptionBasketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
