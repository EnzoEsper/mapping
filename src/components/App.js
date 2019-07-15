import React from 'react';

import './App.css';
import Drop from './DropDown';
import ResMap from './ResMap';

class App extends React.Component {

  state = { linea: {} };
  
  onClickHandle = (linea) => {
    this.setState({ linea });
    console.log(this.state);
  };

  render(){
    return (
      <div className="map">
        <ResMap linea={this.state.linea}/>
        <Drop onClickHandle={this.onClickHandle}/>
        <div className="card footer">
          <p style={{padding:'2px'}} className="card-text">
            Made by <a href="https://twitter.com/enzoesper" target="_blank" rel="noopener noreferrer"> enzoesper </a>
          </p>
        </div>
      </div>
    )
  }
}

export default App;
