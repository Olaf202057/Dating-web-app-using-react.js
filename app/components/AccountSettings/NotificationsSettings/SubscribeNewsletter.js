import React from 'react'

const SubscribeNewsletter = (props) => {
  const divStyle1 = {marginTop: "20px"},
        divStyle2 = {marginTop: "0"};
  return (
    <div className="col-md-12" style={divStyle1}>
        <div className="row subAccount">
          <h4>Notifications & newsletter</h4>    
        </div>
        
        <div className="row">
          <button type="button" className="btn btn-info subs" style={divStyle2}>Subscribe</button>
          <button type="button" className="btn btn-danger">Unscribe</button>
        </div>
      </div>
  )
}

export default SubscribeNewsletter;
