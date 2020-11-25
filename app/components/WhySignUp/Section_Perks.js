import React from 'react'
import woman from '../../img/woman.png'

const Section_Perks = (props) => {
  const center = {textAlign: 'center'},
        hrStyle = {width: '30%'};
  return (
    <section id="evenmoreperks">
      <div className="col-md-12 evenomoreperks blueTxt">
          <div className="container">
                <div className="row">
                  <div className="col-md-12" style={center}>
                      <h2><strong>Get Ready For Even More Perks</strong></h2>
                        <hr style={hrStyle} /> 
                    </div>
                  <div className="col-md-6">
                      <img src={woman} className="img-responsive" />  
                    </div>
                    <div className="col-md-6 list">
                        <ul className="noBullet">
                            <li className="bullet">Send unlimited messages to any user</li>
                            <li className="bullet">Know who's viewed you</li>
                            <li className="bullet">Play speed date</li>
                            <li className="bullet">Receive gifts from users</li>
                            <li className="bullet">Search for users</li>
                            <li className="bullet">Subscribed members get viewed more than free users</li>
                      </ul>
                    </div>
                </div>
            </div>
      </div>            
    </section>
  )
}

export default Section_Perks;

