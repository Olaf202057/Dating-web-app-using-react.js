import React from 'react'

const TopNav = (props) => {
  const {children} = props;
  return (
    <div className="top_nav">
        {children}     
    </div>   
  )
}

export default TopNav;