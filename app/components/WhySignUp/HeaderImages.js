import React from 'react'

const HeaderImages = () => {
  const center = {textAlign: 'center'};
  return (
    <div className="col-md-12 headerProp" style={center}>
        <div className="titleHeaderWsu">
          <h2><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit</strong></h2>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
            <button type="button" className="btn btn-info btn-lg">Upgrade Now</button> 
        </div>    
    </div>
  )
}

export default HeaderImages;
