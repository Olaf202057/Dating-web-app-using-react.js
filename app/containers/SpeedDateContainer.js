import React, {PropTypes, Component} from 'react'
import Menu from '../components/Navigation/Menu'
import TopNavWrapper from '../components/Navigation/TopNavWrapper'
import TopNav from '../components/Navigation/TopNav'
import SpeedDate from '../components/SpeedDate'

export default class SpeedDateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  
  componentDidMount() {
    if (!document.getElementById("speed--style")) {
       var ls = document.createElement('link');
       ls.rel='stylesheet';
       ls.id='speed--style';
       ls.href= '../app/components/SpeedDate/style.css';
       document.getElementsByTagName('head')[0].appendChild(ls);
    } else {
     document.getElementById("speed--style").disabled = false;
    }
  }

  componentWillUnmount(){
    //Disabling
    var pageStyle = document.getElementById("speed--style");
    pageStyle.disabled = true;
  }

  render() {
    return (
      <div>
        <Menu />
        <TopNavWrapper>
          <TopNav/>
        </TopNavWrapper>
        <SpeedDate />
      </div>
    )
  }
}