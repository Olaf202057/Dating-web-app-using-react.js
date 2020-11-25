import React from 'react'

const Header = () => {
  const pStyle = {marginTop: '100px'},
        center = {textAlign: 'center'};
  return (
    <div className="col-md-12">
      <div className="row-fluid" style={center}>
          <div className="giftsHeader">
              <h2>Make a great first impression <br />by sending a gift</h2>
                <p style={pStyle}>Addresses will not be shared. Pay us and we will ship the order to the recipient and notify them who sent it</p>
            </div>
        </div>
    </div>
  )
}

export default Header;
