import React from 'react'
import TabLine from './TabLine'

const WhiteBox = (props) => {
  const divStyle = {marginTop:'40px', padding: '20px 40px'};
  return (
    <div className="row whiteBox">
        <div className="col-md-5 col-sm-12">
            <span className="grey"><strong>ABOUT ME</strong></span>   
        </div>
            
        <div className="col-md-7 col-sm-12">
            <button type="button" className="btn btn-info btn-md">CREATE CUSTOM QUESTION</button>
        </div>
                                            
        {/* tab lines */}                       
        <div className="col-xs-12" style={divStyle}>
            <TabLine question="THE MOVIE I'VE WATCHED MOST TIMES" />
            <TabLine question="MY LIFE HISTORY IN FIVE SENTANCES OR LESS" style={true} />
            <TabLine question="MY FIRST CONCERT / MY DREAM CONCERT" style={true} />
            <TabLine question="OBSCURE KNOWLIDGE I POSSESS" style={true} />
            <TabLine question="I HAVE WEALNESS FOR GUYS/GIRLS WHO" style={true} />
            <TabLine question="FORM ME FIRST DATE NO-NO IS" style={true} />            
        </div>
    </div>
  )
}

export default WhiteBox;
