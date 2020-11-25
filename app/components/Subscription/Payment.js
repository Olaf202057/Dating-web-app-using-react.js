import React from 'react'

const Payment = () => {
  const center = {textAlign: 'center'};
  return (
    <div className="col-md-8 col-xs-12 form">
        {/* card name */}                            
        <div className="col-md-12">
           <input type="text" name="cardname" id="cardname" placeholder="Name of the card" />
        </div> 
        {/* /card name */}

        {/* card number */}
        <div className="col-md-12">
            <input type="number" name="cardnumber" id="field2" placeholder="Card number" />
        </div>
        {/* /card number */}
                                                
        {/* month -*/}
        <div className="col-md-3">  
            <select name="month" id="month">
                <option id="field3-0" value="Option 0">Month</option>
                <option id="field3-1" value="Option 1">01</option>
                <option id="field3-2" value="Option 2">02</option>
                <option id="field3-3" value="Option 3">03</option>
                <option id="field3-4" value="Option 4">04</option>
                <option id="field3-5" value="Option 5">05</option>
                <option id="field3-6" value="Option 6">06</option>
                <option id="field3-7" value="Option 7">07</option>
                <option id="field3-8" value="Option 8">08</option>
                <option id="field3-9" value="Option 9">09</option>
                <option id="field3-10" value="Option 10">10</option>
                <option id="field3-11" value="Option 11">11</option>
                <option id="field3-12" value="Option 12">12</option>
            </select>   
        </div>                          
        {/* /month */} 
                            
        {/* year -*/}
        <div className="col-md-3">  
            <select name="year" id="year">
              <option id="field4-0" value="Option 0">Year</option>
                <option id="field4-2" value="Option 2">2016</option>
                <option id="field4-3" value="Option 3">2017</option>
                <option id="field4-4" value="Option 4">2018</option>
                <option id="field4-5" value="Option 5">2019</option>
                <option id="field4-6" value="Option 6">2020</option>
                <option id="field4-7" value="Option 7">2021</option>
                <option id="field4-8" value="Option 8">2022</option>
                <option id="field4-9" value="Option 9">2023</option>
                <option id="field4-10" value="Option 10">2024</option>
                <option id="field4-11" value="Option 11">2025</option>
                <option id="field4-12" value="Option 12">2026</option>
                <option id="field4-13" value="Option 13">2027</option>
                <option id="field4-14" value="Option 14">2028</option>
                <option id="field4-15" value="Option 15">2029</option>
                <option id="field4-16" value="Option 16">2030</option>
            </select>   
        </div>                          
        {/* /year */}     
                         
        {/* cvv */}                            
        <div className="col-md-6">
          <input type="number" name="cvv" id="field5" placeholder="CVV" />
        </div> 
        {/* /card name */}  
                            
        {/* checkout button */}
        <div className="col-md-12">
          <input type="submit" id="checkout" title="CHECKOUT" value="CHECKOUT" className="checkoutButton" />
        </div>      
        {/* /checkout button */}
        
        <div className="col-md-12" style={center}>
            <div className="fancy"><span> or pay with </span></div> 
        </div>
                            
        {/* paypal */}
        <div className="col-md-12 paypal" style={center}>
            <a href="https://www.paypal.com/mk/webapps/mpp/home">
                <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_200x51.png" alt="PayPal" />
            </a>    
        </div>
                            
       {/* /paypal */}
    
    </div>
  )
}

export default Payment;


