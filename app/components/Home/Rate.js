import React from 'react'

const Rate = () => {
  const center ={textAlign: 'center'};
  return (
    <div className="row-fluid" style={center}>
        <div className="rate block">
            <div className="rating hide-on-mobile">
                <h3>Rate Emma:</h3>
                <a href="#"><span className="rateOne">1</span></a>
                <a href="#"><span className="rateTwo">2</span></a>
                <a href="#"><span className="rateThree">3</span></a>
                <a href="#"><span className="rateFour">4</span></a>
                <a href="#"><span className="rateFive">5</span></a>
                <a href="#"><span className="rateSix">6</span></a>
                <a href="#"><span className="rateSeven">7</span></a>
                <a href="#"><span className="rateEight">8</span></a>
                <a href="#"><span className="rateNine">9</span></a>
                <a href="#"><span className="rateTen">10</span></a>
            </div>
            <div className="top_btns">
                <div className="col-sm-4">
                    <div className="squar_btn message_btn transition">
                        <div className="icon message_icon"></div>
                        <span>Write a message</span>
                    </div>
                </div> 
                <div className="col-sm-4">
                    <div className="squar_btn gift_btn transition col-sm-4">
                        <div className="icon gift_icon"></div>
                        <span>Send a gift</span>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="squar_btn follow_btn transition col-sm-4">
                        <div className="icon follow_icon"></div>
                        <span>Follow me</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rate;