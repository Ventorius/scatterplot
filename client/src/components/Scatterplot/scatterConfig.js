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
const chartConfig = {
  onClick: function (e) {
    const elements = this.getElementAtEvent(e)

    if (elements.length > 0 && elements[0]._model.radius === 10) {
      this.update()
      elements[0]._model.radius = 20
      elements[0]._model.borderWidth = 10
      elements[0]._model.borderColor = 'rgba(225,225,225,1)'
    } else if (elements.length > 0 && elements[0]._model.radius === 20) {
      this.update()
    }
  },
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
        drawTicks: true
      },
      ticks: {
        fontSize: 20,
        fontColor: '#B6BEC6'
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
const dataConfig = {
  passColor: 'rgba(101,182,60,1)',
  failColor: 'rgba(232,55,63,1)',
  errorColor: 'rgba(245,128,49,1)',
  pointRadius: 10,
  passLabel: 'pass',
  errorLabel: 'error',
  failLabel: 'fail'
}

export { legendConfig, chartConfig, dataConfig }