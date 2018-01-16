import React, { Component } from 'react'
import { Scatter } from 'react-chartjs-2'
import { prepareArrayPropsForChart } from '../../services/dataParser'

class Scatterplot extends Component {

  render () {
    prepareArrayPropsForChart(this.props.plotpoints)

    const legendConfig = {
      display: true,
      position: 'top',
      labels: {
        usePointStyle: true,
      },
      onClick: () => {}
    }

    const data = {
      datasets: [{
        label: 'pass',
        pointBackgroundColor: 'rgba(101,182,60,1)',
        pointRadius: 10,
        pointHitRadius: 15,
        data: this.props.plotpoints.filter((item) => item.status === 'pass')
      },
        {
          label: 'error',
          pointBackgroundColor: 'rgba(245,128,49,1)',
          pointRadius: 10,
          data: this.props.plotpoints.filter((item) => item.status === 'error')

        },
        {
          label: 'fail',
          pointBackgroundColor: 'rgba(232,55,63,1)',
          pointRadius: 10,
          data: this.props.plotpoints.filter((item) => item.status === 'fail')

        }]
    }

    const chartConfig = {
      
      tooltips: {
        enabled: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false,
          },

          type: 'time',
          time: {
            displayFormats: {
              month: 'MMM YYYY'
            }
          }
        }],
        yAxes: [{
          gridLines: {
            borderDash: [8, 8],
          },
          ticks: {
            min: 0,
            max: 300,
            stepSize: 30,
            callback: (value, index, values) => value % 60 === 0 ? `${value / 60} min` : ''
          }
        }]
      }
    }

    return (
      <div>
        <Scatter data={data} legend={legendConfig} options={chartConfig}/>
      </div>
    )
  }
}

Scatterplot.propTypes = {}
Scatterplot.defaultProps = {}

export default Scatterplot
