import React from 'react'
import img1 from '../../../img/search/01.jpg'

const AvatarSelect = () => {
  const center = {textAlign: 'center'};
  return (
    <div className="col-md-4">
        <div style={center}>
          <div className="row">
             <p>Click on the image to change your avatar</p>          
              <div className="fileUpload">
                <img src={img1} className="img-circle img-responsive" />
                <input id="uploadBtn" type="file" className="upload" />
              </div>
          </div>
        </div>           
    </div>
  )
}

export default AvatarSelect;
