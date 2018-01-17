import React, { Component } from 'react'
import Scatterplot from './components/Scatterplot'

class App extends Component {

  state = {
    plotPoints: [],
    fromDate: '',
    toDate: ''
  }

  fetchPlotPoints = async () => {

    let queryString =`?from=${this.state.fromDate}&to=${this.state.toDate}`

    const res = await fetch(`http://localhost:5000/plotpoints${queryString}`)
    const plotPoints = await res.json()
    this.setState({
      plotPoints
    })
  }

  handleFromDateChange = (event) => {
    this.setState({fromDate: new Date(event.target.value)})
  }

  handleToDateChange = (event) => {
    this.setState({toDate: new Date(event.target.value)})
  }

  componentWillMount () {
    this.fetchPlotPoints()
  }

  render () {
    return (
      <div className="App">
        <form>
          Date From:
          <input type="date" value={this.state.from} onChange={this.handleFromDateChange}/>
          Date To:
          <input type="date" value={this.state.to} onChange={this.handleToDateChange}/>
          <input type="submit" value="Filter points" onClick={(e) => {
            e.preventDefault()
            this.fetchPlotPoints()
          }}/>
        </form>
        <Scatterplot plotPoints={this.state.plotPoints}/>
      </div>
    )
  }
}

export default App
