import React from 'react'

const ContentWrapper = (props) => {
  const {children} = props;
  return (
    <div className="col-md-12">
      {children}
    </div>
  )
}

export default ContentWrapper
