import React from 'react'

const SubmitButton = () => {
  const spanStyle = {fontSize: "18px"}
  return (
    <div className="row">
        <button type="button" className="btn btn-info btn-lg signUpBtn"><span style={spanStyle}>Sign Up</span></button>
    </div>
  )
}

export default SubmitButton;
