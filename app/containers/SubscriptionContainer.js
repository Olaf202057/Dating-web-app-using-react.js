import React, {PropTypes, Component} from 'react'
import Menu from '../components/Navigation/Menu'
import TopNavWrapper from '../components/Navigation/TopNavWrapper'
import TopNav from '../components/Navigation/TopNav'
import Subscription from '../components/Subscription'

export default class SubscriptionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  
  componentDidMount() {
    if (!document.getElementById("subscription--style")) {
       var ls = document.createElement('link');
       ls.rel='stylesheet';
       ls.id='subscription--style';
       ls.href= '../app/components/Subscription/style.css';
       document.getElementsByTagName('head')[0].appendChild(ls);
    } else {
     document.getElementById("subscription--style").disabled = false;
    }
  }

  componentWillUnmount(){
    //Disabling
    var pageStyle = document.getElementById("subscription--style");
    pageStyle.disabled = true;
  }

  render() {
    return (
      <div>
        <Menu />
        <TopNavWrapper>
          <TopNav />
        </TopNavWrapper>
        <Subscription />
      </div>
    )
  }
}