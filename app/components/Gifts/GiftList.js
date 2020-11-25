import React from 'react'
import img1 from '../../img/gifts/01.jpg'
import img2 from '../../img/gifts/02.jpg'
import img3 from '../../img/gifts/03.jpg'
import img4 from '../../img/gifts/04.jpg'
import img5 from '../../img/gifts/05.jpg'
import img6 from '../../img/gifts/06.jpg'
import GiftItem from './GiftItem'

const GiftList = () => {
  const divStyle = {marginTop: "50px"};
  return (
      <div className="col-md-12" style={divStyle}>    
        {/* FIRST ROW */}
        <div className="row-fluid gifts">
            <GiftItem giftImage={img1} giftPrice="10$" giftTitle="Strawberry Chocolatetini"  />
            <GiftItem giftImage={img2} giftPrice="10$" giftTitle="Chocolate" />
            <GiftItem giftImage={img3} giftPrice="10$" giftTitle="Teddy Bear" />
        
            {/* SECOND ROW */}
            <div className="row-fluid gifts">
                <GiftItem giftImage={img4} giftPrice="10$" giftTitle="Lovely Daisy" />
                <GiftItem giftImage={img5} giftPrice="10$" giftTitle="Mr.Beer Gold Edition" />
                <GiftItem giftImage={img6} giftPrice="10$" giftTitle="Bath and body works" />                
            </div>
        </div>     
    </div> 
  )
}

export default GiftList;



