import React, {Component} from 'react';
import './App.css';
import Plants from './components/plants/plants';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Plants/>
        </header>
      </div>
    );
  }
}
export default App;
