import React, { Component } from 'react';
import Login from '../../containers/login'
class App extends Component {

    render() {
        return (
            <div className="App">
              <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <h1>
                  Blogging Site
                </h1>
                
              </header>
      
                <h3>Find the best blogs here</h3>
                <Login />
                
            </div>
          );
    }
}
export default App;