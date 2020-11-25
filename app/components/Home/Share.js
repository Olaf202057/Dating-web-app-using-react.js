import React from 'react'
import mail from '../../img/mail.png'
import twitter from '../../img/twitter.png'
import fb from '../../img/soc_fb.png' 

const Share = () => {
  const divStyle = {marginBottom: "10px"};
  return (
    <div className="row-fluid">
        <div className="sharing block">
            <div className="col-sm-12" style={divStyle}><h3>Share Emma:</h3></div>
            
            <a href="#" className="soc_icon"><img src={fb} /></a>
            <a href="#" className="soc_icon"><img src={twitter} /></a>
            <a href="#" className="soc_icon"><img src={mail} /></a>
        </div>
    </div>
  )
}

export default Share;