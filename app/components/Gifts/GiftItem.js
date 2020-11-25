import React from 'react'

const GiftItem = (props) => {
  const {giftImage, giftTitle, giftPrice } = props,
        spanStyle = {marginTop: '10px'};
  return (
    <div className="col-md-4 col-xs-12 col-sm-6 view view-third">
        <img src={giftImage} className="img-responsive" />     
        <div className="lenta">
            <span className="titleGiftLenta">{giftTitle}</span>
            <span className="pull-right plus"><i className="fa fa-plus-circle" style={spanStyle}></i></span> 
            <span className="pull-right giftPrice">{giftPrice}</span>
        </div>
    </div>
  )
}

export default GiftItem;
