const defaultState = {
  city: {
    cityName: '上海'
  }
}
export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'initMap':
      newState.city.cityName = action.city
      return newState;
  
    default:
      return state;
  }
}