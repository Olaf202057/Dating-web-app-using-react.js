import React from 'react'
import girl from '../../../img/icons/girl.png'

const BasicInfo = (props) => {
  const tdStyle = props.alt ? {} : {borderTop:"none!important"},
        spanStyle = {fontSize: '12px'},
        middle = {verticalAlign: 'text-top'},
        center = {textAlign: 'center'};
  return (
    <div className="col-sm-12">       
        <div className="infoBasics row">                                                                         
            <table className="table">
                <tbody>
                    <tr>
                        <td style={tdStyle}><span className="orange"><img src={girl} style={middle} /><strong> AURREY'S BASICS</strong></span></td>
                        <td style={tdStyle}><span style={spanStyle}>Matched 102 days ago</span></td>
                    </tr>
                    <tr>
                        <td>Height</td>
                        <td>5'4"</td>    
                    </tr>
                    <tr>
                        <td>Ethnicithy</td>
                        <td>Latino</td>        
                    </tr>
                    <tr>
                        <td>Ocupation</td>
                        <td>Designer</td>        
                    </tr>
                    <tr>
                        <td>Education</td>
                        <td>Harvard University, MD</td>        
                    </tr>
                    <tr>
                        <td>Children</td>
                        <td>NO</td>        
                    </tr>
                    <tr>
                        <td>Politics</td>
                        <td>Not Interested</td>        
                    </tr>
                </tbody>                                                  
            </table>
              
            <center><div className="col-sm-12" style={center}>
              <div className="followBtn">
                <button type="button" className="btn btn-default btn-large">follow</button>
              </div>     
            </div></center>
        </div>
    </div>
  )
}

export default BasicInfo;
