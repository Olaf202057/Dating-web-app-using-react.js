import React from 'react'

const Photo = (props) => {
  const {name, age, img, location} = props;
  return (
    <div className="col-md-4 col-sm-6">
          <img src={img} className="img-responsive"/>
          <div className="content">
              <h5>{name}</h5>
              <span>{age} y.o. {location}</span>
          </div>
      </div>
  )
}

export default Photo;