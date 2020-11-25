import React from 'react'

const Age_Location = (props) => {
  const center = {textAlign: 'center'},
        {age, location} = props;
  return (
    <div className="col-sm-12">       
        <div className="row firsRowLeftrpofile" style={center}>
        
            <div className="col-md-4">
                <span>Age</span>
                <h3>{age}</h3>
            </div>
            
            <div className="col-md-8">    
                <span>Live in</span>
                <h3>{location}</h3>
            </div>    
         </div>
     </div>  
  )
}

export default Age_Location;
