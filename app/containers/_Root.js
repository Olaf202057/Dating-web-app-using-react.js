import React, {PropTypes, Component} from 'react'
import {Provider} from 'react-redux'
import {Router} from  'react-router'
import routes from  '../config/routes'

export default class _Root extends Component {

  loadJS(filename, filetype){
      if (filetype=="js") {
          var fileref=document.createElement('script')
          fileref.setAttribute("type","text/javascript")
          fileref.setAttribute("src", filename)
      }
      if (typeof fileref!="undefined")
          document.getElementsByTagName("body")[0].appendChild(fileref)
  }

  runScripts(){
      this.loadJS('../app/js/scripts.js', 'js');
      this.loadJS('../app/js/filters.js');
  }

  render() {
    var { store, history } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Router history={history} routes={routes}  onUpdate={this.runScripts.bind(this)}/>
        </div>
      </Provider>
    )
  }
}

_Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}