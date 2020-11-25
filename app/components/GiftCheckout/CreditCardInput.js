import React from 'react'

const CreditCardInput = () => {
  return (
    <form className="form-inline">
            <div className="form-group">
                <input type="text" className="form-control" id="exampleInputName2" placeholder="Name of the Card" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" id="exampleInputName2" placeholder="Card Number" />
            </div>
            <p></p>

            {/*- Month */}
            <div className="form-group">
                <select className="form-control" id="SelectMonth">
                    <option>Month</option>
                    <option>January</option>
                    <option>February </option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                </select>
            </div>
            <div className="form-group">

            {/*- Year */}
                <select className="form-control" id="SelectMonth">
                    <option>2016</option>
                    <option>2017</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                    <option>2028</option>
                    <option>2029</option>
                    <option>2030</option>
                </select>
            </div>  

            {/*- CVV */}
            <div className="form-group">
                <input type="text" className="form-control cvv" id="exampleInputName2" placeholder="CVV" />
            </div>
                <p></p>
                <button type="submit" className="btn btn-default btn-lg">CHECKOUT</button>
        </form>
  )
}

export default CreditCardInput;

