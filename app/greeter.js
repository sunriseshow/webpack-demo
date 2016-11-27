// Greeter.js
import React, {Component} from 'react';
var config = require('./config.json');

class Greeter extends Component{
  render() {
    return (<div>{config.greetText}</div>);
  }
}
export default Greeter;
