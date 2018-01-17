import React, { Component } from 'react'
import Scatterplot from './components/Scatterplot'
import { getPlotPoints } from './services/dataParser'

class App extends Component {

  state = {
    plotPoints: []
  }

  componentWillMount () {
    this.setState({
      plotPoints: getPlotPoints()
    })
  }

  render () {
    return (
      <div className="App">
        <Scatterplot plotPoints={this.state.plotPoints}/>
      </div>
    )
  }
}

export default App
