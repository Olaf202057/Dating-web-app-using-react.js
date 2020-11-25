import React, {PropTypes, Component} from 'react'
import Menu from '../components/Navigation/Menu'
import TopNavWrapper from '../components/Navigation/TopNavWrapper'
import TopNav from '../components/Navigation/TopNav'
import GiftCheckout from '../components/GiftCheckout'

export default class GiftCheckoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  componentDidMount() {
    if (!document.getElementById("giftCheckout--style")) {
       var ls = document.createElement('link');
       ls.rel='stylesheet';
       ls.id='giftCheckout--style';
       ls.href= '../app/components/GiftCheckout/style.css';
       document.getElementsByTagName('head')[0].appendChild(ls);
    } else {
     document.getElementById("giftCheckout--style").disabled = false;
    }
  }

  componentWillUnmount(){
    //Disabling
    var pageStyle = document.getElementById("giftCheckout--style");
    pageStyle.disabled = true;
  }

  render() {
    return (
      <div>
        <Menu />
        <TopNavWrapper>
          <TopNav />
        </TopNavWrapper>
        <GiftCheckout />
      </div>
    )
  }
}