import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';
import AppFooter from './AppFooter';

class App extends Component {
  render(){
    return (
      <div>
        <h1>Hello World</h1>
        <AppFooter></AppFooter>
      </div>
    );
  }
}


ReactDOM.render(<App/>, document.getElementById('root'));