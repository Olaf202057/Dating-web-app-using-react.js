import React from 'react'

const TabText = (props) => {
  const pStyle = props.style ? {marginTop: "40px"} : {};
  const {topic, answer} = props;
  return (
    <span>
        <p className="blueTxt" style={pStyle}>{topic}</p>
        <p>{answer}</p>
    </span> 
  )
}

export default TabText
