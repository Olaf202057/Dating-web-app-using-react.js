import React, {Component} from 'react'
import '../css/bootstrap.min.css'
import '../css/bootstrap.css'
import '../css/font-awesome.min.css'
import '../css/style.scss'
import '../js/jquery.js'
import 'jquery-ui'
import '../js/bootstrap.js'

export default class Main extends Component {
  render() {
    return (
      <div>
          {this.props.children}
      </div>

    )
  }
}