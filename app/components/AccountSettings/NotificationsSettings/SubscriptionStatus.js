import React from 'react'

const SubscriptionStatus = () => {
  return (
    <div className="col-md-12">
        <div className="row">
          <div className="col-md-4">
              <button type="button" className="btn btn-default disabled accountSubscribe"><span>subscription status:</span><span id="subscriptionStatus"></span> registered</button>
            </div>  
            <div className="col-md-4">
              <button type="button" className="btn btn-default accountSubscribe"><span>subscribe if not a paid member</span></button>
            </div>
          </div>       
     </div>
  )
}

export default SubscriptionStatus;
