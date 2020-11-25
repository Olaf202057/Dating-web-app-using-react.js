import React from 'react'

const NameInput = () => {
  return (
    <div className="form-group">
        <label className="col-xs-12" htmlFor="textinput">Name</label>  
        <div className="col-xs-12">
            <input id="textinput" name="textinput" placeholder="enter your name" className="form-control input-md" type="text"  />
        </div>
    </div>
  )
}

export default NameInput;
