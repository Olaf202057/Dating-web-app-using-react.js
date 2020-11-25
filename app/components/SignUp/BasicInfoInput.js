import React from 'react'

const BasicInfoInput = () => {
  return (
    <span>
        {/*- /fist name */}
        <div className="row">
            <div className="col-xs-12">
                <input type="text" name="name" id="name" placeholder="First Name" />
            </div> 
        </div>    

        {/*- username */}
        <div className="row">
            <div className="col-xs-12">
                <input type="text" name="username" id="user" placeholder="username" />
            </div>
        </div>    

        {/*- e-mail */}
        <div className="row">
            <div className="col-xs-12">
                <input type="email" name="e-mail" id="editemail" placeholder="e-mail" />
            </div>    
        </div>              

        {/*- password */}
        <div className="row">
            <div className="col-xs-12">
                <input type="password" name="newpass" id="newPass" placeholder="choose your password" />
            </div>    
        </div> 
    </span>
  )
}

export default BasicInfoInput;
