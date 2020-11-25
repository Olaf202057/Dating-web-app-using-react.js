import React from 'react'

const BodyWrapper = (props) => {
  const {children} = props;
  return (
    <div className="body_container">
      {children}
    </div>
  )
}

export default BodyWrapper
