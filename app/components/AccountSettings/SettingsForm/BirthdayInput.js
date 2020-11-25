import React from 'react'

const BirthdayInput = () => {
  return (
      <div className="row">
              {/* Day */}
              <div className="form-group">
                  <label className="col-xs-12" htmlFor="birthday">Birthday</label>
                  <div className="col-md-4 col-xs-12">
                      <select className="form-control" id="SelectDay">
                          <option>Day</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          <option>13</option>
                          <option>14</option>
                          <option>15</option>
                          <option>16</option>
                          <option>17</option>
                          <option>18</option>
                          <option>19</option>
                          <option>20</option>
                          <option>21</option>
                          <option>22</option>
                          <option>23</option>
                          <option>24</option>
                          <option>25</option>
                          <option>26</option>
                          <option>27</option>
                          <option>28</option>
                          <option>29</option>
                          <option>30</option>
                          <option>31</option>
                      </select>
                  </div>   
               </div>  
          
              {/* Month */}
               <div className="form-group">
                  <div className="col-md-4 col-xs-12">
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
               </div> 
               
              {/* Year */}
               <div className="form-group">
                  <div className="col-md-4 col-xs-12">
                      <select className="form-control" id="SelectYear">
                          <option>Year</option>
                          <option>1997</option>
                          <option>1996</option>
                          <option>1995</option>
                          <option>1994</option>
                          <option>1993</option>
                          <option>1992</option>
                          <option>1991</option>
                          <option>1990</option>
                          <option>1989</option>
                          <option>1988</option>
                          <option>1987</option>
                          <option>1986</option>
                          <option>1985</option>
                          <option>1984</option>
                          <option>1983</option>
                          <option>1982</option>
                          <option>1981</option>
                          <option>1980</option>
                          <option>1979</option>
                          <option>1978</option>
                          <option>1977</option>
                          <option>1976</option>
                          <option>1975</option>
                          <option>1974</option>
                      </select>
                  </div>   
               </div>
          </div>
  )
}

export default BirthdayInput;

