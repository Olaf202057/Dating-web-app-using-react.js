import React from 'react'

const GeneralPhoto = (props) => {
  const {name, lastnames, location, age, img} = props;
  return (
      <div className="row-fluid">
          <img src={img} className="img-responsive"/>
          <div className="photoTxt">
              <div className="col-sm-6 left">
                  <h2>{name}</h2>
                  <h3>{lastnames}</h3>
              </div>
              <div className="col-sm-6">
                  <span className="age">{age}<span>y.o.</span></span>
                  <span className="city">{location}</span>   
              </div>
          </div>    
      </div>  
  )
}

export default GeneralPhoto;