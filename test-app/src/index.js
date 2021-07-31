import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';
import AppFooter from './AppFooter';
import AppContent from './AppContent';

import './index.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

class App extends Component {
  render(){
    return (
      <div className="app">
        <h1>Hello World</h1>
        <AppContent/>
        <AppFooter></AppFooter>
      </div>
    );
  }
}


ReactDOM.render(<App/>, document.getElementById('root'));