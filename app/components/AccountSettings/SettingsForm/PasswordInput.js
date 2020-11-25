import React from 'react'

const PasswordInput = () => {
  const divStyle = {marginLeft: '35px'};
  return (
    <div className="col-md-12">
        <div className="row">
            
            <div className="col-md-4 col-xs-12">
                <h4>Change your password</h4> 
                <div className="form-group">
                    <label className="col-xs-12" htmlFor="pass">Currant Password</label>
                    <input type="password" className="form-control" id="CahngePassword" placeholder="Enter your currant password" />
                </div> 
            </div>    

            <div className="col-md-4 col-xs-12 newPass" style={divStyle}>
                <h4>&nbsp;</h4> 
                <div className="form-group">
                    <label className="col-xs-12" htmlFor="pass">New Password</label>
                    <input type="password" className="form-control" id="CahngePassword" placeholder="Enter your new password" />
                </div>
            </div>  
            
        </div>
    </div>
  )
}

export default PasswordInput;
