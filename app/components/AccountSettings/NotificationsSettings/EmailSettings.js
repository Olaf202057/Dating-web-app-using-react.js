import React from 'react'

const EmailSettings = () => {
  return (
    <div className="col-md-12">
      <div className="row">
          <h4>Email Settings</h4>
            <input type="checkbox" id="c1" name="cc" />
            <label htmlFor="c1"><span></span>Email me dates I might like</label>

            <input type="checkbox" id="c2" name="cc" />
            <label htmlFor="c2"><span></span>Email me new messages when I recieve them</label>

            <input type="checkbox" id="c3" name="cc" />
            <label htmlFor="c3"><span></span>Email me dates send specifically from other users</label>
      </div>
    </div>
  )
}

export default EmailSettings;
