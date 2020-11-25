import React, {PropTypes, Component} from 'react'
import BodyWrapper from '../components/BodyWrapper'
import Menu from '../components/Navigation/Menu'
import TopNavWrapper from '../components/Navigation/TopNavWrapper'
import TopNav from '../components/Navigation/TopNav'
import Header from '../components/Gifts/Header'
import MainGift from '../components/Gifts/MainGift'
import GiftList from '../components/Gifts/GiftList'

export default class GiftsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  componentDidMount() {
    if (!document.getElementById("gifts--style")) {
       var ls = document.createElement('link');
       ls.rel='stylesheet';
       ls.id='gifts--style';
       ls.href= '../app/components/Gifts/style.css';
       document.getElementsByTagName('head')[0].appendChild(ls);
    } else {
     document.getElementById("gifts--style").disabled = false;
    }
  }

  componentWillUnmount(){
    //Disabling
    var pageStyle = document.getElementById("gifts--style");
    pageStyle.disabled = true;
  }

  render() {
    return (
      <div>
        <Menu />
        <BodyWrapper>
        <TopNavWrapper>
          <TopNav />
        </TopNavWrapper>

        <Header />
        <MainGift />
        <GiftList />
      </BodyWrapper>
      </div>
    )
  }
}