import React from 'react'
import img1 from '../../img/01.jpg'
import img2 from '../../img/02.jpg'
import img3 from '../../img/03.jpg'
import img4 from '../../img/04.jpg'

const HeaderImages = () => {
  return (
      <div className="col-md-12 col-xs-12 headerImages">
          <div className="profileImage col-md-3 col-sm-6 col-xs-12"><img src={img1} className="img-responsive" /></div>
          <div className="profileImage col-md-3 col-sm-6 col-xs-12 hideImage"><img src={img2} className="img-responsive" /></div>
          <div className="profileImage col-md-3 col-sm-6 col-xs-12 hideImage"><img src={img3} className="img-responsive" /></div>
          <div className="profileImage col-md-3 col-sm-6 col-xs-12 hideImage"><img src={img4} className="img-responsive" /></div>
      </div>
  )
}

export default HeaderImages;
