import React from 'react'
import WhiteBox from './WhiteBox'
import WhiteBox_Tabs from './WhiteBox_Tabs'

const SecondBox = (props) => {
  const {alt} = props;
  return (
    <div className="col-md-12 col-xs-12">
      {
        alt ? <WhiteBox />
        : <WhiteBox_Tabs />
      }
    </div>
  )
}

export default SecondBox;
