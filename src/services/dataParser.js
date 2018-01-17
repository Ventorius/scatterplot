import data from '../data.json'

const getPlotPoints = () => data

const preparePointsArrayForChart = (arr) => {

  return [...arr].map(item => (
    {
      x: item['start_time'],
      y: item['duration'],
      status: item['status']
    }
  ))
}

export {getPlotPoints, preparePointsArrayForChart}