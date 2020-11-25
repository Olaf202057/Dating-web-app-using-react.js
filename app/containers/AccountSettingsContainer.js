import React, {PropTypes, Component} from 'react'
import Menu from '../components/Navigation/Menu'
import TopNavWrapper from '../components/Navigation/TopNavWrapper'
import TopNav from '../components/Navigation/TopNav'
import AccountSettings from '../components/AccountSettings/'

export default class AccountSettingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    
    // document.getElementById("uploadBtn").onChange = function () {
    //   document.getElementById("uploadFile").value = this.value;
    // };
  }

  componentDidMount() {
    if (!document.getElementById("account--style")) {
       var ls = document.createElement('link');
       ls.rel='stylesheet';
       ls.id='account--style';
       ls.href= '../app/components/AccountSettings/style.css';
       document.getElementsByTagName('head')[0].appendChild(ls);
    } else {
     document.getElementById("account--style").disabled = false;
    }
  }

  componentWillUnmount(){
    //Disabling
    var pageStyle = document.getElementById("account--style");
    pageStyle.disabled = true;
  }

  render() {
    return (
      <div>
        <Menu />
        <TopNavWrapper>
          <TopNav />
        </TopNavWrapper>
        <AccountSettings />
      </div>
    )
  }
}