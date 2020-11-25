import React from 'react'
import DateGiftDisplay from './DateGiftDisplay'
import CreditCardInput from './CreditCardInput'
import PayPalButton from './PayPalButton'

const GiftPurchase = () => {
  return (
     <div className="col-md-12 col-sm-12">
        
          {/*--- FORM --*/}
            <div className="col-md-12 col-sm-12">
                <h2>Book Your First You & Me Concierge Date</h2> 
                <hr />   
                <DateGiftDisplay />
                    
                <div className="col-md-1"></div>
                    
                <div className="col-md-8 col-sm-12">
                    <h3>Your Purchese Summary</h3>
                    <hr/>
                    <div className="col-md-6">
                        <p>Strawberry Chocolatetini</p>
                    </div>
                
                    <div className="col-md-6">
                        <p>Gift For... <a href="#" id="purcheseUsername">USERNAME</a></p>
                    </div>
                        
                    <div className="col-md-12">
                        <hr/>
                    </div>
                        
                    <div className="col-md-6">
                        <p>Recurring Monthly Membership Fee</p>
                    </div>
                    
                    <div className="col-md-6">
                        <p className="price"><strong>$10</strong></p>
                    </div>
                        
                    <div className="col-md-12 col-sm-12">
                        <hr />
                    </div>  
                    
                    <div className="col-md-12"> 
                        <CreditCardInput />
                        <PayPalButton />       
                    </div>  
                </div>   
            </div>
        </div>
  )
}

export default GiftPurchase;