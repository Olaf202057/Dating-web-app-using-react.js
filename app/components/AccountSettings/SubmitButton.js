import React from 'react'

const SubmitButton = () => {
  const btnStyle = {fontSize: '12px'};
  return (
    <div className="col-md-12">
      <div className="row">
        <button type="button" className="btn btn-default btn-md pull-right"><span style={btnStyle}>submit changes</span></button>
      </div>
    </div> 
  )
}

export default SubmitButton;
