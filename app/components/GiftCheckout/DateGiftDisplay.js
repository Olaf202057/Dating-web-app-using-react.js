import React from 'react'
import giftCheckout01 from '../../img/gifts/giftCheckout01.jpg'

const DateGiftDisplay = () => {
  return (
    <div className="col-md-3 col-sm-12">
        <img src={giftCheckout01} className="img-responsive" />
        <h4>Strawberry Chocolatetini</h4>
            <p className="blueTxt">Your date includes</p>
            <ul>
                <li>Lorem ipsum 1</li>
                <li>Lorem ipsum 2</li>
                <li>Lorem ipsum 3</li>
            </ul>    
    </div>
  )
}

export default DateGiftDisplay;
