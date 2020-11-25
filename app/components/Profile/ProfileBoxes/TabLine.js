import React from 'react'

const TabLine = (props) => {
  const divStyle = props.style ? {marginTop: "50px"} : {};
  const {question} = props;
  return (
      <div className="row" style={divStyle}>
          <p className="blueTxt">{question}</p>
          <span className="greyTitle">+ Add your answer</span>
          <i className="fa fa-pencil pull-right">...</i>
      </div> 
  )
}

export default TabLine;
