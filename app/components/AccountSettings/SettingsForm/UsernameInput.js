import React from 'react'

const UsernameInput = () => {
  return (
      <div className="row">
          <div className="form-group">
              <label className="col-xs-12" htmlFor="pass">Change your username</label>
              <input type="text" className="form-control" id="changeUsername" placeholder="enter your new username" />
          </div>      
      </div>
  )
}

export default UsernameInput;
