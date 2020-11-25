import React from 'react'
import logo from '../../img/logo.png'

const TopHomeNav = () => {
  return (
      <div className="col-xs-5">   
          <div className="open_menu for_open_menu"></div>
          <a href="/" className="logo"><img src={logo} /></a>
      </div>
  )

}

export default TopHomeNav