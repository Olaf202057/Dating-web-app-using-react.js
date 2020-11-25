import React from 'react'
import img7 from '../../img/base/7.png'
import profileImg from '../../img/base/profile.jpg'

const Comments = () => {
  const divStyle = {marginLeft: '20px'},
        imgStyle = {marginLeft:"30px", marginRight:"10px"},
        inputStyle = {marginBottom: "40px"};

  return (      
      <div className="row-fluid">
          <div className="comments block">
          <h3>Comments:</h3>
       
                {/* comments left */}
                <div className="comment col-md-12 col-xs-12">
                  <div className="col-md-2 col-xs-2" style={divStyle}>
                        <img src={img7} className="img-circle img-responsive"/>
                    </div>
                    
                    <div className="col-md-9 col-xs-9">
                        <div className="container_comment">
                            <h4>Fname lname:</h4>
                            <p>Lorem ipsum dolor sit , consectetur adipisicing elit, sed do eiusmod tempor tempor tempor tempor tem</p>
                        </div>    
                    </div> 
                </div>    
    
                {/* comments right */}
                <div className="comment col-md-12 col-xs-12">
                    
                    <div className="col-md-9 col-xs-9">
                  <div className="container_comment">
                            <h4>Fname lname:</h4>
                            <p>Lorem ipsum dolor sit , consectetur adipisicing elit, sed do eiusmod tempor tempor tempor tempor tem</p>
                  </div>
              </div>
                    
                    
                  <div className="col-md-2 col-xs-2" style={divStyle}>
                        <img src={img7} className="img-circle img-responsive"/>
                    </div>
                </div>
                
                {/* comments left */}
                <div className="comment col-md-12 col-xs-12">
                  <div className="col-md-2 col-xs-2" style={divStyle}>
                        <img src={img7} className="img-circle img-responsive"/>
                    </div>
                    
                    <div className="col-md-9 col-xs-9">
                        <div className="container_comment">
                            <h4>Fname lname:</h4>
                            <p>Lorem ipsum dolor sit , consectetur adipisicing elit, sed do eiusmod tempor tempor tempor tempor tem</p>
                        </div>    
                    </div> 
                </div>
                    
                {/* add comment */}
                <div className="col-xs-12">
                    <div className="row">
                      <div className="add_comment">
                          <div className="col-xs-2">
                              <img src={profileImg} className="img-circle img-responsive" style={imgStyle}/>
                            </div>    
                            <div className="col-xs-10">
                                <textarea placeholder="Your comment goes here..."></textarea>
                                <p>Lost: <span>100 </span>/ 100 chars</p>
                                <input type="submit" className="btn" value="Send" style={inputStyle}/>
                            </div>    
                  </div>
                        </div>
                    </div>          
                </div>    
        
            </div>
  )
}

export default Comments;