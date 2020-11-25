import React from 'react'
import {Link} from 'react-router'

const Menu = () => {
  return (
      <div className="menu_fixed">
          <Link to="search">
            Search
          </Link>
          <Link to="account">
            Account
          </Link>
          <Link to="gift-checkout">
            Gift Checkout
          </Link>
          <Link to="gifts">
            Gifts
          </Link>
          <Link to="profile">
            Profile
          </Link>
          <Link to="profile2">
            Profile 2
          </Link>
          <Link to="signup">
            Sign Up
          </Link>
          <Link to="speeddate">
            Speed Date
          </Link>
          <Link to="whysignup">
            Why Sign Up?
          </Link>
          <Link to="subscription">
            Subscription
          </Link>
      </div>
  )
}

export default Menu;