import data from '../data.json'

const getPlotpoints = () => data

const prepareArrayPropsForChart = (arr) => {

  const replaceProps = (obj) => {
    obj.x = obj['start_time']
    obj.y = obj['duration']

    delete obj['start_time']
    delete obj['duration']
  }

  arr.forEach(item => {
    replaceProps(item)
  })

  return arr
}

export {getPlotpoints, prepareArrayPropsForChart}