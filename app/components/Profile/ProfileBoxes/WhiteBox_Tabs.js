import React from 'react'
import TabLine from './TabLine'
import TabText from './TabText'

const WhiteBox_Tabs = (props) => {
  const divStyle1 = {marginTop: '20px'},
        divStyle2 = {padding: '20px 40px'};
  return (
      <div className="row whiteBox">
          
          <ul className="nav nav-tabs">
              <li className="active"><a data-toggle="tab" href="#gettoknowme"><span className="blueTxt"><i className="fa fa-info-circle"></i> <strong>GET TO KNOW ME...</strong></span></a></li>
              <li><a data-toggle="tab" href="#qa"><span className="grey"><i className="fa fa-comments-o"></i> <strong>QUESTIONS / ANSWERS</strong></span></a></li>
          </ul>    
          
              
          <div className="col-xs-12" style={divStyle1}>
              <div className="tab-content">
                  <div id="gettoknowme" className="tab-pane fade in active">
                      <TabText topic="What I'm most passionate about..." answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum massa congue, gravida urna a, congue elit. Proin eu libero libero. Nunc neque risus, condimentum id aliquam nec, congue vel orci. In mattis sapien at ultricies congue. Pellentesque eget interdum magna. Cras scelerisque aliquam condimentum." />
                      <TabText style={true} topic="What I'm most passionate about..." answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum massa congue, gravida urna a, congue elit. Proin eu libero libero. Nunc neque risus, condimentum id aliquam nec, congue vel orci. In mattis sapien at ultricies congue. Pellentesque eget interdum magna. Cras scelerisque aliquam condimentum." />
                      <TabText style={true} topic="What I'm most passionate about..." answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum massa congue, gravida urna a, congue elit. Proin eu libero libero. Nunc neque risus, condimentum id aliquam nec, congue vel orci. In mattis sapien at ultricies congue. Pellentesque eget interdum magna. Cras scelerisque aliquam condimentum." />
                      <TabText style={true} topic="What I'm most passionate about..." answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum massa congue, gravida urna a, congue elit. Proin eu libero libero. Nunc neque risus, condimentum id aliquam nec, congue vel orci. In mattis sapien at ultricies congue. Pellentesque eget interdum magna. Cras scelerisque aliquam condimentum." />
                      <TabText style={true} topic="What I'm most passionate about..." answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum massa congue, gravida urna a, congue elit. Proin eu libero libero. Nunc neque risus, condimentum id aliquam nec, congue vel orci. In mattis sapien at ultricies congue. Pellentesque eget interdum magna. Cras scelerisque aliquam condimentum." />
                      <TabText style={true} topic="What I'm most passionate about..." answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum massa congue, gravida urna a, congue elit. Proin eu libero libero. Nunc neque risus, condimentum id aliquam nec, congue vel orci. In mattis sapien at ultricies congue. Pellentesque eget interdum magna. Cras scelerisque aliquam condimentum." />
                  </div>
                  
                  <div id="qa" className="tab-pane fade">
                      <div className="whiteBox">
                          <div className="col-md-5 col-sm-12">
                              <span className="grey"><strong>ABOUT ME</strong></span>   
                          </div>

                          <div className="col-md-7 col-sm-12">
                              <button type="button" className="btn btn-info btn-md">CREATE CUSTOM QUESTION</button>
                          </div>

                          {/* tab lines */}

                          <div className="col-xs-12" style={divStyle2}>
                            <TabLine question="THE MOVIE I'VE WATCHED MOST TIMES" />
                            <TabLine question="MY LIFE HISTORY IN FIVE SENTANCES OR LESS" style={true} />
                            <TabLine question="MY FIRST CONCERT / MY DREAM CONCERT" style={true} />
                            <TabLine question="OBSCURE KNOWLIDGE I POSSESS" style={true} />
                            <TabLine question="I HAVE WEALNESS FOR GUYS/GIRLS WHO" style={true} />
                            <TabLine question="FORM ME FIRST DATE NO-NO IS" style={true} />                
                          </div>
                      </div>
                  </div>    
              </div>
            {/* /tab-content */}
          </div>
      </div>
   
  )
}

export default WhiteBox_Tabs
