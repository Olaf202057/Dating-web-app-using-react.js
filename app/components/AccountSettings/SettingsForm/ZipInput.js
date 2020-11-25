import React from 'react'

const ZipInput = () => {
  return (
    <div className="form-group">
        <label className="col-xs-12" htmlFor="textinput">zip code</label>  
        <div className="col-xs-12">
            <input id="textinput" name="textinput" placeholder="enter your zip code" className="form-control input-md" type="text" />
        </div>
    </div>
  )
}

export default ZipInput
