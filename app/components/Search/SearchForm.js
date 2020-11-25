import React from 'react'
import GenderSelect from './GenderSelect'

const SearchForm = () => {
  const labelStyle = {textAlign: 'left'}
  return (
    <div className="col-md-12">
        <form>
            <div className="col-md-3">
              <GenderSelect />
            </div>
            <div className="col-md-3 col-xs-12">
                <div className="col-xs-3">
                    <label htmlFor="ages" className="labelSearch" style={labelStyle}>Ages</label>
                </div>  
                <input className="ages col-xs-3" type="text" placeholder=""/>    
                
                <div className="col-xs-3">
                    <label htmlFor="AgesTo" className="labelSearch">to</label>
                </div>
                <input className="col-xs-3 ages" type="text" placeholder=""/>
            </div>
            <div className="col-md-3">
                <input className="ages" type="text" placeholder="zip code"/>
            </div>
            <div className="col-md-3">
                <select name="select" id="select">
                    <option>Faith</option>
                    <option>Agnostic</option>
                    <option>Atheist</option>
                    <option>Christian</option>
                    <option>Catholic</option>
                    <option>Buddhist</option>
                    <option>Hindu</option>
                    <option>Jewish</option>
                    <option>Muslim</option>
                    <option>Spiritual without affiliation</option>
                    <option>Other</option>
                    <option>None</option>
                    <option>No Comment</option> 
                </select>
            </div>
            <div className="col-md-3">
                <select name="select" id="select">
                    <option value="select">Race/Ethnicity</option>
                    <option value="1">Asian</option>
                    <option>Black</option>
                    <option>Indian</option>
                    <option>Hispanic/Latin</option>
                    <option>Middle Eastern</option>
                    <option>Native American</option>
                    <option>Pacific Islander</option>
                    <option>White</option>
                    <option>Other</option> 
                </select>
            </div>
            <div className="col-md-3">
                <select name="select" id="select">
                    <option>kids</option>
                    <option>Yes, they live with me</option>
                    <option>Yes, they don't live with me</option>
                    <option>Want them now</option>
                    <option>Want them someday</option>
                    <option>Not for me</option>
                </select>
            </div>
            <div className="col-md-3">
                <select name="select" id="select">
                    <option>smoking level</option>
                    <option>Often</option>
                    <option>Sometimes</option>
                    <option>Never</option> 
                </select>
            </div>
            <div className="col-md-3">
                <select name="select" id="select">
                    <option>drinking level</option>
                    <option>Often</option>
                    <option>Sometimes</option>
                    <option>Never</option> 
                </select>
            </div>
            </form>    
    </div>

  )
}

export default SearchForm;