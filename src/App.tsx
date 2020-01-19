import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/about/about'

class App extends React.Component {
  public myClickHandler (data:any) {
    console.log(data)
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p> */}
          <About title='关于' age={20} onMyClick={ this.myClickHandler }></About>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

      </div>
    );
  }
}

export default App;
