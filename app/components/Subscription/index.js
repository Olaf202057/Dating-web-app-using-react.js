import React from 'react'
import Payment from './Payment'
import PaymentBox from './PaymentBox'

const Subscription = () => {
  return (
    <div className="col-md-12">
        <div className="container subscriptionSettingsProp">
            <div className="row">
                <h4 className="titleAccountSettings">Payment information</h4> 
                <hr />
            </div>
            
            <div className="row">
                <Payment />
                <PaymentBox />
            </div>
        </div>    
    </div> 
  )
}

export default Subscription;