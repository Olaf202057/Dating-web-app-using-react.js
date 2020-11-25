import React from 'react'

const BirthdateSelect = () => {
  const center = {textAlign: 'center'};
  return (
    <div className="row birthday" style={center}>
        <div className="col-md-12"><p>Birthdate</p></div>

            {/*- days -*/}
            <div className="col-sm-4">  
                <select name="month" id="field10">
                    <option id="field10-0" value="Option 0">Day</option>
                    <option id="day01" value="Option 1">01</option>
                    <option id="day02" value="Option 2">02</option>
                    <option id="day03" value="Option 3">03</option>
                    <option id="day04" value="Option 4">04</option>
                    <option id="day05" value="Option 5">05</option>
                    <option id="day06" value="Option 6">06</option>
                    <option id="day07" value="Option 7">07</option>
                    <option id="day08" value="Option 8">08</option>
                    <option id="day09" value="Option 9">09</option>
                    <option id="day10" value="Option 10">10</option>
                    <option id="day11" value="Option 11">11</option>
                    <option id="day12" value="Option 12">12</option>
                    <option id="day13" value="Option 13">13</option>
                    <option id="day14" value="Option 14">14</option>
                    <option id="day15" value="Option 15">15</option>
                    <option id="day16" value="Option 16">16</option>
                    <option id="day17" value="Option 17">17</option>
                    <option id="day18" value="Option 18">18</option>
                    <option id="day19" value="Option 19">19</option>
                    <option id="day20" value="Option 20">20</option>
                    <option id="day21" value="Option 21">21</option>
                    <option id="day22" value="Option 22">22</option>
                    <option id="day23" value="Option 23">23</option>
                    <option id="day24" value="Option 24">24</option>
                    <option id="day25" value="Option 25">25</option>
                    <option id="day26" value="Option 26">26</option>
                    <option id="day27" value="Option 27">27</option>
                    <option id="day28" value="Option 28">28</option>
                    <option id="day29" value="Option 29">29</option>
                    <option id="day30" value="Option 30">30</option>
                    <option id="day31" value="Option 31">31</option>
                </select>   
            </div>                          

            {/*- month -*/}
            <div className="col-sm-4 col-xs-12">  
                <select name="month" id="field20">
                    <option id="month" value="Option 0">Month</option>
                    <option id="jan" value="Option 1">Jan</option>
                    <option id="feb" value="Option 2">Feb</option>
                    <option id="mar" value="Option 3">Mar</option>
                    <option id="apr" value="Option 4">Apr</option>
                    <option id="may" value="Option 5">May</option>
                    <option id="jun" value="Option 6">Jun</option>
                    <option id="jul" value="Option 7">Jul</option>
                    <option id="aug" value="Option 8">Aug</option>
                    <option id="sep" value="Option 9">Sep</option>
                    <option id="oct" value="Option 10">Oct</option>
                    <option id="nov" value="Option 11">Nov</option>
                    <option id="dec" value="Option 12">Dec</option>
                </select>   
            </div>                          

            {/*- year -*/}
            <div className="col-sm-4 col-xs-12">  
                <select name="month" id="field3">
                    <option id="field4-0" value="Option 0">Year</option>
                    <option id="field4-1" value="Option 1">1997</option>
                    <option id="field4-2" value="Option 2">1996</option>
                    <option id="field4-3" value="Option 3">1995</option>
                    <option id="field4-4" value="Option 4">1994</option>
                    <option id="field4-5" value="Option 5">1993</option>
                    <option id="field4-6" value="Option 6">1992</option>
                    <option id="field4-7" value="Option 7">1991</option>
                    <option id="field4-8" value="Option 8">1990</option>
                    <option id="field4-9" value="Option 9">1989</option>
                    <option id="field4-10" value="Option 10">1988</option>
                    <option id="field4-11" value="Option 11">1987</option>
                    <option id="field4-12" value="Option 12">1986</option>
                    <option id="field4-13" value="Option 13">1985</option>
                    <option id="field4-14" value="Option 14">1984</option>
                    <option id="field4-15" value="Option 15">1983</option>
                    <option id="field4-16" value="Option 16">1982</option>
                    <option id="field4-17" value="Option 17">1981</option>
                    <option id="field4-18" value="Option 18">1980</option>
                    <option id="field4-19" value="Option 19">1979</option>
                    <option id="field4-20" value="Option 20">1978</option>
                    <option id="field4-21" value="Option 21">1977</option>
                    <option id="field4-22" value="Option 22">1976</option>
                    <option id="field4-23" value="Option 23">1975</option>
                </select>   
            </div>                          
            
    </div> 
  )
}

export default BirthdateSelect;

