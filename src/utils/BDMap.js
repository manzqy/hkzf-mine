export const getLocationByMap = () => {
  return new Promise((resolve, reject) => {
    const { BMap } = window
    var myCity = new BMap.LocalCity()
    myCity.get(result => {
      console.log('>>>', result.name)
      resolve(result.name)
    })
  })
}
