import React, { PureComponent } from 'react';
import RouteTool from './components/routeTool'
import './App.css';

class App extends PureComponent {
  render(){
    return (
      <div className='App'>
          <RouteTool name="ROUTE" ></RouteTool>
      </div>
    )
  }

}

export default App;
