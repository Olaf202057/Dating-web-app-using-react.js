import React, {Component} from 'react'
import imgGeneral from '../../../img/base/general.jpg'
import imgNone from '../../../img/base/nophoto.png'
import img1 from '../../../img/base/1.png'
import img2 from '../../../img/base/2.png'
import img3 from '../../../img/base/3.png'
import img4 from '../../../img/base/4.png'
import img5 from '../../../img/base/5.png'
import img6 from '../../../img/base/6.png'
import img7 from '../../../img/base/7.png'
import img8 from '../../../img/base/8.png'
import img9 from '../../../img/base/9.png'
import RateMobile from './RateMobile'
import MeetMeButton from './MeetMeButton'
import GeneralPhoto from './GeneralPhoto'
import RateMe from './RateMe'
import Photo from './Photo'



const LeftAside = () => {
  const center = {textAlign: 'center'};
    return (
      <div className="col-sm-5 generalPhoto">

          <RateMobile />
          <GeneralPhoto name="Emma" lastnames={'Rose Roberts'} age={26} location="San Francisco" img={imgGeneral}/>
          <MeetMeButton />
          <RateMe img={img1} numberOfTimes={10} rating={9} numberOfVotes={300} />
          
          {/* more photos */}
          <div className="row-fluid" style={center}>
              <div className="more_photos block">
                  <div className="col-sm-12">
                      <h3>More photos:</h3>
                  </div>                         
                  <div className="col-sm-2 col-xs-4"><img src={img1} className="img-responisve img-circle"/></div>
                  <div className="col-sm-2 col-xs-4"><img src={img2} className="img-responisve img-circle"/></div>
                  <div className="col-sm-2 col-xs-4"><img src={img3}className="img-responisve img-circle"/></div>
                  <div className="col-sm-2 col-xs-4"><img src={imgNone} className="img-responisve img-circle"/></div>
                  <div className="col-sm-2 col-xs-4"><img src={imgNone} className="img-responisve img-circle"/></div>
                  <div className="col-sm-2 col-xs-4"><img src={imgNone} className="img-responisve img-circle"/></div>
              </div>   
          </div>
          
          {/* other photos */}
          <div className="row-fluid other-photos hide-on-mobile" style={center}>
              <div className="col-md-12">
                <Photo name="Emma" age={26} location="San Francisco" img={img1} />
                <Photo name="Emma" age={26} location="San Francisco" img={img2} />
                <Photo name="Emma" age={26} location="San Francisco" img={img3}/>
                <Photo name="Emma" age={26} location="San Francisco" img={img7} />
                <Photo name="Emma" age={26} location="San Francisco" img={img8} />
                <Photo name="Emma" age={26} location="San Francisco" img={img9} />
                <Photo name="Emma" age={26} location="San Francisco" img={img4} />
                <Photo name="Emma" age={26} location="San Francisco" img={img5} />
                <Photo name="Emma" age={26} location="San Francisco" img={img6} />
              </div> 
          </div>    
      
      
      </div>

    )
}

export default LeftAside;
