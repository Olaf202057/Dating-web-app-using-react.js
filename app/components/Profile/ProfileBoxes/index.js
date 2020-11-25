import React from 'react'
import Age_Location from './Age_Location'
import BasicInfo from './BasicInfo'
import FirstBox from './FirstBox'
import SecondBox from './SecondBox'

const ProfileBoxes = (props) => {
  const {alt} = props;
  return (
    <div className="col-md-12 col-xs-12 profile">            
        <div className="container">
          <div className="row"> 

                {/* LEFT SIDE col-5 */}
                <div className="col-md-4 col-xs-12">
                  <div className="row">
                     <Age_Location age={18} location="Los Angeles, CA" />   
                     <BasicInfo alt={true} />
                  </div>        
                </div>
    
                <div className="col-md-1"></div>
                
                {/* RIGHT SIDE col-7 */}      
                <div className="col-md-7 rightSideProfile">
                  <div className="row">
                      <FirstBox />
                      <SecondBox alt={alt} />
                  </div>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default ProfileBoxes;