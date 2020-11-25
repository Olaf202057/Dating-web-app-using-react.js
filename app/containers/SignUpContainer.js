import React, {PropTypes, Component} from 'react'
import Menu from '../components/Navigation/Menu'
import TopNavWrapper from '../components/Navigation/TopNavWrapper'
import TopNav from '../components/Navigation/TopNav'
import SignUp from '../components/SignUp'

export default class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  
  componentDidMount() {
    if (!document.getElementById("signup--style")) {
       var ls = document.createElement('link');
       ls.rel='stylesheet';
       ls.id='signup--style';
       ls.href= '../app/components/SignUp/style.css';
       document.getElementsByTagName('head')[0].appendChild(ls);
    } else {
     document.getElementById("signup--style").disabled = false;
    }
  }

  componentWillUnmount(){
    //Disabling
    var pageStyle = document.getElementById("signup--style");
    pageStyle.disabled = true;
  }

  render() {
    return (
      <div>
        <Menu />
        <TopNavWrapper>
            <TopNav />
        </TopNavWrapper>
        <SignUp />
      </div>
    )
  }
}