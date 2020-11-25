import React from 'react'
import male from '../../img/male.jpg'
import maleOver from '../../img/male-over.jpg'
import female from '../../img/female.jpg'
import femaleOver from '../../img/female-over.jpg'

const GenderSelect = (props) => {
  const divStyle1 = {marginTop:'40px', marginBottom: '20px'},
        divStyle2 = {marginTop: '8px'},
        that = this;

  return (
    <div className="col-xs-12" style={divStyle1}>
        <div className="row">
        <div className="col-md-12" style={divStyle2}><p>please choose your gender</p></div>
            <div className="col-sm-6 col-xs-12 malePosition">
                <img src={male} onClick={() => this.src=maleOver} className="circleMaleProp img-responsive male" />
            </div>
            {/*- <div className="col-md-1 col-xs-12 orPosition"><span className="or">OR</span></div> -*/}
            <div className="col-sm-6 col-xs-12">
                <img src={female} onClick={() => this.src=femaleOver} className="circleFimaleProp img-responsive female" />
            </div>
        </div>
    </div>
  )
}

export default GenderSelect
