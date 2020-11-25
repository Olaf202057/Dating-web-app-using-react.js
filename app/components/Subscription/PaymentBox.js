import React from 'react'

const PaymentBox = () => {
  const hrStyle = {width: '80%'},
        center = {textAlign: 'center'};
  return (
    <div className="col-md-4 col-xs-12" style={center}>
        <div className="paymentBox">
            <h4>Payment summary</h4>
          <hr style={hrStyle} />
            <button type="button" className="btn btn-danger disabled" ><strong>12-MONTH PLAN $6/mo.</strong></button><br />
              <span>Membership features:</span>
              <li>Get viewed more</li>
              <li>Browes anonymously</li>
              <li>Change username</li>
              <li>Never see ads</li>
              <li>100% Monet back Grarantee</li>
              <hr style={hrStyle} />
                <span><h4>TOTAL : $72.00</h4></span>
              <p>Your 12-month membership will renew at $72. 
              <br />Show details
              </p>
        </div>  
    </div>
  )
}

export default PaymentBox;