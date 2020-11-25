import React, {PropTypes, Component} from 'react'
import Menu from '../components/Navigation/Menu'
import TopNavWrapper from '../components/Navigation/TopNavWrapper'
import TopNav from '../components/Navigation/TopNav'
import Search from '../components/Search'
import Pagination from '../components/Pagination'

export default class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  
  componentDidMount() {
    if (!document.getElementById("search--style")) {
       var ls = document.createElement('link');
       ls.rel='stylesheet';
       ls.id='search--style';
       ls.href= '../app/components/Search/style.css';
       document.getElementsByTagName('head')[0].appendChild(ls);
    } else {
     document.getElementById("search--style").disabled = false;
    }
  }

  componentWillUnmount(){
    //Disabling
    var pageStyle = document.getElementById("search--style");
    pageStyle.disabled = true;
  }

  render() {
    return (
      <div>
        <Menu />
        <TopNavWrapper>
            <TopNav />
        </TopNavWrapper>
        <Search />    
        <Pagination />
      </div>
    )
  }
}