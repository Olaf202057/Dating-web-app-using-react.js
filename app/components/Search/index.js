import React from 'react'
import img1 from '../../img/search/01.jpg'
import img2 from '../../img/search/02.jpg'
import img3 from '../../img/search/03.jpg'
import img4 from '../../img/search/04.jpg'
import img5 from '../../img/search/05.jpg'
import img6 from '../../img/search/06.jpg'
import img7 from '../../img/search/07.jpg'
import img8 from '../../img/search/08.jpg'
import SearchForm from './SearchForm'
import SearchButton from './SearchButton'
import ResultItem from './ResultItem'

const Search = () => {
  return (
    <div className="search">
      <div className="container">
          <div className="col-md-12 col-xs-12">
              
            {/* title -*/}
            <div className="row">
              <h2>These are you most compatible matches</h2>
            </div>
            <SearchForm />
            <SearchButton />
          </div>              
      </div>

      {/*---------------------------- /header -----------------------*/}

        {/*- FIRST ROW */}
          <div className="row firstRow">
            <ResultItem image={img1} name="Lena" city="Los Angeles, CA" />          
            <ResultItem image={img2} name="Andi" city="Manhatten Beach, CA" /> 
            <ResultItem image={img3} name="Renee" city="Los Angeles, CA" /> 
            <ResultItem image={img4} name="Lena" city="Santa Monica, CA" /> 
         </div>   
         
         {/* SECOND ROW */}
            <div className="row rowMargin">
              <ResultItem image={img5} name="Clare" city="Los Angeles, CA" /> 
              <ResultItem image={img6} name="Allison" city="Manhatten Beach, CA" /> 
              <ResultItem image={img7} name="Lenna" city="Los Angeles, CA" /> 
              <ResultItem image={img8} name="Nicole" city="Santa Monica, CA" /> 
            </div>
         
         {/* THIRD ROW */}
            <div className="row rowMargin">
              <ResultItem image={img1} name="Lena" city="Los Angeles, CA" /> 
              <ResultItem image={img2} name="Andi" city="Manhatten Beach, CA" /> 
              <ResultItem image={img3} name="Renee" city="Los Angeles, CA" /> 
              <ResultItem image={img4} name="Lena" city="Santa Monica, CA" /> 
         </div>   

         {/* FOURTH ROW */}
            <div className="row rowMargin">
              <ResultItem image={img5} name="Clare" city="Los Angeles, CA" /> 
              <ResultItem image={img6} name="Allison" city="Manhatten Beach, CA" /> 
              <ResultItem image={img7} name="Lenna" city="Los Angeles, CA" /> 
              <ResultItem image={img8} name="Nicole" city="Santa Monica, CA" /> 
            </div>

        </div>   
  )
}

export default Search;