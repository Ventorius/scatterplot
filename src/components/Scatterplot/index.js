import React, { Component } from 'react'
import { Scatter } from 'react-chartjs-2'
import { preparePointsArrayForChart } from '../../services/dataParser'
import { legendConfig, chartConfig, dataConfig } from './scatterConfig'

class Scatterplot extends Component {

  state = {
    plotPoints: []
  }

  componentWillMount () {

    const plotPoints = preparePointsArrayForChart(this.props.plotPoints)
    console.log();
    this.setState({
      chartData: {
        datasets: [{
          label: dataConfig.passLabel,
          backgroundColor: dataConfig.passColor,
          pointBackgroundColor: dataConfig.passColor,
          pointRadius: dataConfig.pointRadius,
          data: plotPoints.filter((item) => item.status === dataConfig.passLabel)
        },
          {
            label: dataConfig.errorLabel,
            backgroundColor: dataConfig.errorColor,
            pointBackgroundColor: dataConfig.errorColor,
            pointRadius: dataConfig.pointRadius,
            data: plotPoints.filter((item) => item.status === dataConfig.errorLabel)
          },
          {
            label: dataConfig.failLabel,
            backgroundColor: dataConfig.failColor,
            pointBackgroundColor: dataConfig.failColor,
            pointRadius: dataConfig.pointRadius,
            data: plotPoints.filter((item) => item.status === dataConfig.failLabel)
          }]
      }
    })

    console.log(plotPoints);
  }

  render () {

    return (
      <div>
        <Scatter data={this.state.chartData} legend={legendConfig} options={chartConfig}/>
      </div>
    )
  }
}

Scatterplot.propTypes = {}
Scatterplot.defaultProps = {}

export default Scatterplot
