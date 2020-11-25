import React from 'react'

const Filter = () => {
  const divStyle = {marginBottom: '8px'},
        center = {textAlign: 'center'};
  return (
    <div className="row-fluid">
        <div className="filterBox">
            <div className="col-sm-4 col-xs-12" style={divStyle}>Show me:</div>
                <div className="col-sm-4 col-xs-6">
                    <div className="dropdown">
                          <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Woman
                          <span className="caret"></span></button>
                          <ul className="dropdown-menu">
                            <li><a href="#">Woman</a></li>
                            <li><a href="#">Man</a></li>
                            <li><a href="#">Woman & Man</a></li>
                          </ul>
                    </div>
                </div>
                    
                <div className="col-sm-4 col-xs-6 age_filter" style={center}>
                    <div className="age_input">
                        <input className="col-xs-6" type="text" value="18 y.o." placeholder="Set" readOnly/>
                        <input className="col-xs-6" type="text" value="30 y.o." placeholder="Set" readOnly/>
                    </div>
                </div>
        </div>    
    </div>

  )
}

export default Filter;