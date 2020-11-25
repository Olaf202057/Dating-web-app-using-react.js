import React, {PropTypes, Component} from 'react'
import Menu from '../components/Navigation/Menu'
import TopNavWrapper from '../components/Navigation/TopNavWrapper'
import TopProfileNav from '../components/Navigation/TopProfileNav'
import HeaderImages from '../components/Profile/HeaderImages'
import Actions from '../components/Profile/Actions'
import ProfileBoxes from '../components/Profile/ProfileBoxes'
import mystyle from '../css/mystyle.css'

export default class Profile2Container extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
    if (!document.getElementById("profile--style")) {
       var ls = document.createElement('link');
       ls.rel='stylesheet';
       ls.id='profile--style';
       ls.href= '../app/components/Profile/style.css';
       document.getElementsByTagName('head')[0].appendChild(ls);
    } else {
     document.getElementById("profile--style").disabled = false;
    }
  }

  componentWillUnmount(){
    //Disabling
    var pageStyle = document.getElementById("profile--style");
    pageStyle.disabled = true;
  }

  render() {
    return (
      <div>
        <Menu />
        <TopNavWrapper>
            <TopProfileNav />
        </TopNavWrapper>
           
        <HeaderImages />
        <Actions />
        <ProfileBoxes alt={true}/>
      </div>
    )
  }
}