const preparePointsArrayForChart = (arr) => {

  return [...arr].map(item => (
    {
      x: item['start_time'],
      y: item['duration'],
      status: item['status']
    }
  ))
}

export default preparePointsArrayForChart