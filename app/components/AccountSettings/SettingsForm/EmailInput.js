import React from 'react'

const EmailInput = () => {
  return (
    <div className="form-group">
        <label className="col-xs-12" htmlFor="textinput">Change your e-mail</label>  
        <div className="col-xs-12">
            <input id="changeMail" name="textinput" placeholder="enter your new e-mail" className="form-control input-md" type="email" /> 
        </div>
    </div> 
  )
}

export default EmailInput;
