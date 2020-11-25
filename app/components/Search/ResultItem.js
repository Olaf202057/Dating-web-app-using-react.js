import React from 'react'

const ResultItem = (props) => {
  const {image, name, city} = props;
  return (
    <div className="col-xs-12 col-sm-6 col-lg-3">
        <img src={image} className="img-responsive" />
          <div className="imageInfo">
            <span className="nameImg">{name}</span><br />
              <span className="cityImg">{city}</span>
          </div>    
      </div>   
  )
}

export default ResultItem;
