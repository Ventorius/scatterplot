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
        fontColor: '#8e8e8e',
        fontFamily: 'sans-serif',
        fontSize: 16,
        padding: 24,
      },
      onClick: null
    }

    const data = {
      datasets: [{
        label: 'pass',
        backgroundColor: 'rgba(101,182,60,1)',
        pointBackgroundColor: 'rgba(101,182,60,1)',
        pointRadius: 10,
        data: this.props.plotpoints.filter((item) => item.status === 'pass')
      },
        {
          label: 'error',
          backgroundColor: 'rgba(245,128,49,1)',
          pointBackgroundColor: 'rgba(245,128,49,1)',
          pointRadius: 10,
          data: this.props.plotpoints.filter((item) => item.status === 'error')
        },
        {
          label: 'fail',
          backgroundColor: 'rgba(232,55,63,1)',
          pointBackgroundColor: 'rgba(232,55,63,1)',
          pointRadius: 10,
          data: this.props.plotpoints.filter((item) => item.status === 'fail')
        }]
    }

    const chartConfig = {
      hover: {
        mode: false
      },
      tooltips: {
        enabled: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false,
          },
          ticks: {
            fontSize: 20,
            fontColor: '#B6BEC6',
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
            lineWidth: 2,
            zeroLineColor: 'rgba(230,234,239,1)',
            zeroLineWidth: 2
          },
          ticks: {
            fontSize: 20,
            fontColor: '#B6BEC6',
            min: 0,
            max: 300,
            stepSize: 30,
            callback: (value, index, values) => value % 60 === 0 && value !== 0 ? `${value / 60} min` : ''
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
