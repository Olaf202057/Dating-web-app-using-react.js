import React from 'react'
import profileImg from '../../img/base/profile.jpg'

const TopUserNav = () => {
  return (
    <div className="col-xs-7 col-sm-5">
        <div className="indexProfileImg dropdown pull-right">
            <img src={profileImg} className="img-circle profileImgSml user_pic_comment profile_pic_comment" />
            <button className="btn-profile dropdown-toggle nameHeader" type="button" data-toggle="dropdown"><span className="nameProfileimg">Cornelius Wilson</span><span className="caret"></span></button>
            <ul className="dropdown-menu">
                <li><a href="#">Logout</a></li>
            </ul>    
        </div>
    </div> 
  )
}

export default TopUserNav;