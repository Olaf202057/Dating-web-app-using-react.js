import React from 'react'

const RateMe = (props) => {
  const {numberOfTimes, numberOfVotes, rating, img} = props,
        divStyle = {color: 'black'},
        center = {textAlign: 'center'};
  return (
    <div className="row-fluid">
         <div className="panel-group">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" href="#collapse1">Click to see rate score:</a>
              </h4>
            </div>
            <div id="collapse1" className="panel-collapse collapse" style={divStyle}>
                <div className="panel-body">
                    <div className="col-xs-5">
                        <img src={img} className="img-responisve img-rounded"/>
                        <small>you rated her: {numberOfTimes} times</small>
                    </div>
                    <div className="col-xs-7 ratescore" style={center}>
                        <h3>Official Rating</h3>
                        <h1>{rating}</h1>    
                        <p>based on {numberOfVotes} votes</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default RateMe;