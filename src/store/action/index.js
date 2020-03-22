import {getLocationByMap} from '../../utils/BDMap'
export const getLocationByMapAtion = () => {
  return async dispatch => {
    let result = await getLocationByMap()
    console.log(result)
    dispatch({
      type: 'initMap',
      city: result
    })
  }
}