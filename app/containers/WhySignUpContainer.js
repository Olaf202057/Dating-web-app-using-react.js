import React, {PropTypes, Component} from 'react'
import Menu from '../components/Navigation/Menu'
import TopNavWrapper from '../components/Navigation/TopNavWrapper'
import TopNav from '../components/Navigation/TopNav'
import HeaderImages from '../components/WhySignUp/HeaderImages'
import Section_GetMost from '../components/WhySignUp/Section_GetMost'
import Section_Perks from '../components/WhySignUp/Section_Perks'
import Section_Upgrade from '../components/WhySignUp/Section_Upgrade'

export default class WhySignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  
  componentDidMount() {
    if (!document.getElementById("why--style")) {
       var ls = document.createElement('link');
       ls.rel='stylesheet';
       ls.id='why--style';
       ls.href= '../app/components/WhySignUp/style.css';
       document.getElementsByTagName('head')[0].appendChild(ls);
    } else {
     document.getElementById("why--style").disabled = false;
    }
  }

  componentWillUnmount(){
    //Disabling
    var pageStyle = document.getElementById("why--style");
    pageStyle.disabled = true;
  }

  render() {
    return (
      <div>
        <Menu />
        <TopNavWrapper>
          <TopNav />
        </TopNavWrapper>
        <HeaderImages />
        <Section_GetMost />
        <Section_Perks />
        <Section_Upgrade />
      </div>
    )
  }
}