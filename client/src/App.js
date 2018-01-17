import React, { Component } from 'react'
import Scatterplot from './components/Scatterplot'

class App extends Component {

  state = {
    plotPoints: []
  }

  fetchPlotPoints = async () => {
    const res = await fetch('http://localhost:5000/plotpoints')
    const plotPoints = await res.json()
    this.setState({
      plotPoints
    })
  }

  componentWillMount () {
    this.fetchPlotPoints()
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
