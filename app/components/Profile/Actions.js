import React from 'react'

const Actions = (props) => {
  const center = {textAlign: 'center'}

  return (
    <div className="container overlay" style={center}>
      <div className="row">
        <div className="col-md-12 col-sm-12">
            <div className="col-md-6 col-sm-12">
                <div className="name">
                    <span><i className="fa fa-heart-o"></i> Aubrey</span>
                </div>
            </div>    
            {/* /name */}

            {/* buttons */}
            <div className="col-md-6 col-sm-12">
                <div className="row buttons">
                    <button type="button" className="btn btn-success btn-lg"><i className="fa fa-envelope-o"></i> Send Message</button>
                    <button type="button" className="btn btn-primary btn-lg"><i className="fa fa-gift"></i> Send a Gift</button> 
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Actions;