import React from 'react'

const MainGift = (props) => {
  const {images, name, location, age} = props,
        center = {textAlign: 'center'},
        imageList = images.map((image, index) => {
          return ( <div key={index} className="col-md-2 col-sm-6"><img src={image} className="img-responsive"/></div> )
        });
  return (
    <div className="row-fluid">
        <div className="col-md-12">
            <div className="col-md-2" style={center}>
                <h3>{name}<br/>{age}</h3>
                <p>{location}</p>
                <div className="col-xs-6">
                    <a href="#"><i className="fa fa-heart-o fa-3x"></i></a>
                </div>    
                <div className="col-xs-6">
                    <a href="#"><i className="fa fa-times fa-3x"></i></a>
                </div> 
            </div>
            {imageList} 
        </div>
    </div>
  )
}

export default MainGift