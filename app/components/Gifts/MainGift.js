import React from 'react'
import flower from '../../img/gifts/flowers.jpg'

const MainGift = () => {
  const center = {textAlign: 'center'};
  return (
    <div className="col-md-12 mainGiftProp">
      <div className="row-fluid">

          {/* LEFT SIDE */}
            <div className="col-md-6">
              <img src={flower} className="img-responsive" />
            </div>

            {/* RIGHT SIDE */}
            <div className="col-md-6" style={center}>
              <h3>Lorem ipsum</h3>
                <p>Sed ut perspiciatis unde</p>
                <button type="button" className="btn btn-info btn-lg">Buy it $10</button>
            </div>
        </div>
    </div>
  )
}

export default MainGift;
