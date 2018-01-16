import React, { Component } from 'react';
import Scatterplot from './components/Scatterplot'
import {getPlotpoints} from './services/dataParser'

class App extends Component {

  state = {
    plotpoints: []
  }

  componentWillMount(){
    this.setState({
      plotpoints: getPlotpoints()
    })
  }

  render() {
    return (
      <div className="App">
        <Scatterplot plotpoints={this.state.plotpoints}/>
      </div>
    );
  }
}

export default App;
