import React from 'react'

const RateMobile = (props) => {
  const {name} = props,
        center = {textAlign: 'center'};
  return (
      <div className="row-fluid hide-on-pc" style={center}>
          <div className="rate block">
              <h3>Rate {name}:</h3>
              <div className="rating">
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
          </div>
      </div>
  )
}

export default RateMobile;