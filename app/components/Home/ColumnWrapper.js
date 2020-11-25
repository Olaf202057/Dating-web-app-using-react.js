import React from 'react';

const ColumnWrapper = (props) => {
  const {children} = props,
        divStyle = {paddingLeft: "20px"};
  return (
    <div className="col-sm-7 paddingColumnHome" style={divStyle}>
      {children}

    {/* /left side col-md-7 */} 
    </div> 
  )
};

export default ColumnWrapper;