import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';
import AppFooter from './AppFooter';
import './index.css'; 

class App extends Component {
  render(){
    return (
      <div className="app">
        <h1>Hello World</h1>
        <AppFooter></AppFooter>
      </div>
    );
  }
}


ReactDOM.render(<App/>, document.getElementById('root'));