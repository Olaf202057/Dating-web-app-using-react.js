import React from 'react'
import speedDateIcon from '../../img/icons/speedDateIcon.png'
import envelope from '../../img/icons/envelope.png'
import giftIcon from '../../img/icons/giftIcon.png'

const Section_GetMost = () => {
  const hrStyle1 = {width: '20%', border: '1px solid #e8e8e8'},
        hrStyle2 = {width: '50%', border: '4px solid #e8e8e8'},
        center = {textAlign: 'center'};
  return (
    <section id="getmostofit">
        <div className="col-md-12 getmostofit blueTxt" style={center}>
          <center><div className="container">
                <div className="row">
                    <h2><strong>Get the Most out of it</strong></h2>
                    <hr style={hrStyle1} />
                </div>
                
                <div className="col-md-4">
                  <div className="row">
                      <img src={speedDateIcon} className="img-responsive" />
                        <hr style={hrStyle2} />
                        <h3>Speed Dating</h3>
                        <p className="columsTxt">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                      <img src={envelope} className="img-responsive" />
                        <hr style={hrStyle2} />
                        <h3>Read Unlimited Messages</h3>
                        <p className="columsTxt">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                      <img src={giftIcon} className="img-responsive" />
                        <hr style={hrStyle2} />
                        <h3>Receive Gifts from Users</h3>
                        <p className="columsTxt">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div></center>
        </div>
    </section>
  )
}

export default Section_GetMost;

