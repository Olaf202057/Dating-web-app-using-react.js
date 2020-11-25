import React from 'react'

const TimeZoneInput = () => {
  return (
    <div className="row">
      <div className="form-group">
            <label className="col-xs-12" htmlFor="select">Choose your time zone</label>
            <div className="col-xs-12">
            <select className="form-control" id="SelectTimeZone">
                    <option id="field4-1" value="Option 1">European Central Time (GMT+1:00)</option>
                    <option id="field4-2" value="Option 2">Eastern European Time (GMT+2:00)</option>
                    <option id="field4-3" value="Option 3">(Arabic) Egypt Standard Time (GMT+2:00)</option>
                    <option id="field4-4" value="Option 4">Eastern African Time (GMT+3:00)</option>
                    <option id="field4-5" value="Option 5">Middle East Time (GMT+3:30)</option>
                    <option id="field4-6" value="Option 6">Near East Time (GMT+4:00)</option>
                    <option id="field4-7" value="Option 7">Pakistan Lahore Time (GMT+5:00)</option>
                    <option id="field4-8" value="Option 8">India Standard Time (GMT+5:30)</option>
                    <option id="field4-9" value="Option 9">Bangladesh Standard Time (GMT+6:00)</option>
                    <option id="field4-10" value="Option 10">Vietnam Standard Time (GMT+7:00)</option>
                    <option id="field4-11" value="Option 11">China Taiwan Time (GMT+8:00)</option>
                    <option id="field4-12" value="Option 12">Japan Standard Time (GMT+9:00)</option>
                    <option id="field4-13" value="Option 13">Australia Central Time (GMT+9:30)</option>
                    <option id="field4-14" value="Option 14">Australia Eastern Time (GMT+10:00)</option>
                    <option id="field4-15" value="Option 15">Solomon Standard Time (GMT+11:00)</option>
                    <option id="field4-16" value="Option 16">New Zealand Standard Time (GMT+12:00)</option>
                    <option id="field4-17" value="Option 17">Midway Islands Time (GMT-11:00)</option>
                    <option id="field4-18" value="Option 18">Hawaii Standard Time (GMT-10:00)</option>
                    <option id="field4-19" value="Option 19">Alaska Standard Time (GMT-9:00)</option>
                    <option id="field4-20" value="Option 20">Pacific Standard Time (GMT-8:00)</option>
                    <option id="field4-21" value="Option 21">Phoenix Standard Time (GMT-7:00)</option>
                    <option id="field4-22" value="Option 22">Mountain Standard Time (GMT-7:00)</option>
                    <option id="field4-23" value="Option 23">Central Standard Time (GMT-6:00)</option>
                    <option id="field4-24" value="Option 24">Eastern Standard Time (GMT-5:00)</option>
                    <option id="field4-25" value="Option 25">Indiana Eastern Standard Time (GMT-5:00)</option>
                    <option id="field4-26" value="Option 26">Puerto Rico and US Virgin Islands Time (GMT-4:00)</option>
                    <option id="field4-27" value="Option 27">Canada Newfoundland Time (GMT-3:30)</option>
                    <option id="field4-28" value="Option 28">Argentina Standard Time (GMT-3:00)</option>
                    <option id="field4-29" value="Option 29">Brazil Eastern Time (GMT-3:00)</option>
                    <option id="field4-30" value="Option 39">Central African Time (GMT-1:00)</option>
                </select>
                </div>   
         </div>  
    </div> 
  )
}

export default TimeZoneInput;