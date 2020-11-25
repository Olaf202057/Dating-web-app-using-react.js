import React from 'react';
import LeftAside from './LeftAside'
import ColumnWrapper from './ColumnWrapper'
import Filter from './Filter'
import Rate from './Rate'
import Share from './Share'
import Comments from './Comments'

const Home = (props) =>{
  const divStyle = {marginTop: '20px'};
  return (
    <div className="wrapper" style={divStyle}>
      <LeftAside />
      <ColumnWrapper>
        <Filter />                       
        <Rate />
        <Share />
        <Comments />
      </ColumnWrapper>            
    </div>
  )
};

export default Home;