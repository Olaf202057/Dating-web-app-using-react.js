import React, {Component} from 'react'
import TopNavWrapper from '../components/Navigation/TopNavWrapper'
import TopUserNav from '../components/Navigation/TopUserNav'
import TopHomeNav from '../components/Navigation/TopHomeNav'
import Menu from '../components/Navigation/Menu'
import BodyWrapper from '../components/BodyWrapper'
import Home from '../components/Home'
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
    if (!document.getElementById("home--style")) {
       var ls = document.createElement('link');
       ls.rel='stylesheet';
       ls.id='home--style';
       ls.href= '../app/components/Home/style.css';
       document.getElementsByTagName('head')[0].appendChild(ls);
    } else {
     document.getElementById("home--style").disabled = false;
    }
  }

  componentWillUnmount(){
    //Disabling
    var pageStyle = document.getElementById("home--style");
    pageStyle.disabled = true;
  }

  render() {
    return (
      <div>
        <Menu />
        <BodyWrapper>
          <TopNavWrapper>
            <TopHomeNav />
            <TopUserNav />
          </TopNavWrapper> 
          <Home />  
        </BodyWrapper>   
      </div>
    )
  }
}