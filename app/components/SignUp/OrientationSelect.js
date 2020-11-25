import React from 'react'

const OrientationSelect = () => {
  return (
    <div className="row">                               
        <select name="sexualorientation" id="field1">
            <option id="sex" value="Option 0">sexual orientation</option>
            <option id="straight" value="Option 1">straight</option>
            <option id="gay" value="Option 2">gay</option>
            <option id="bi" value="Option 3">bi</option>
        </select>   
    </div> 
  )
}

export default OrientationSelect;
