import React from 'react'

const PayPalButton = () => {
  const divStyle = {marginTop: "55px"},
        center = {textAlign: "center"};
  return (
    <div className="col-md-12" id="giftCheckoupaymentButtons" style={center}>
        <div className="col-md-6" style={divStyle}>
            <button type="button" className="btn btn-info btn-lg">
                <i className="fa fa-paypal fa-2x"></i>
                <span>checkout with paypal</span>
            </button>
        </div>
    </div>
  )
}

export default PayPalButton