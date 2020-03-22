import React, { Component, Fragment } from 'react'
import { NavBar, Icon } from 'antd-mobile'
import { connect } from 'react-redux'
import axios from '../../utils/request'
import indexCss from './index.module.scss'
class CitySelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cityList: []
    }
  }
  componentDidMount() {
    this.getHotCity()
  }
  getHotCity = async () => {
    const { cityList } = this.state
    /* 当前定位 */
    cityList.push({
      title: '当前定位',
      children: [{
        label: this.props.currentCity
      }]
    })
    /* 热门城市 */
    let { data } = await axios({
      url: '/area/hot'
    })
    cityList.push({
      title: '热门城市',
      children: data.body
    })
    /* 城市列表 */
    let data1 = await axios({
      url: '/area/city',
      params: {
        level: 1
      }
    })
    let mapList = data1.data.body.reduce((prev, next) => {
      let temp = next.short.slice(0, 1)
      prev[temp] || (prev[temp] = [])
      prev[temp].push(next)
      return prev
    }, {})
    let arr = []
    Object.keys(mapList).forEach((v, i) => {
      arr.push({
        title: v.toUpperCase(),
        children: mapList[v]
      })
    })
    arr.sort((a, b) => (a.title > b.title) - 0.5)
    const newArr = [...cityList, ...arr]
    /* ------------- */
    this.setState({
      cityList: newArr
    })
    console.log(newArr)
  }
  render() {
    const { history } = this.props
    const {cityList} = this.state
    return (
      <Fragment>
        <NavBar
          mode="light"
          icon={
            <Icon type="left" style={{ fontSize: '27px', color: '#666' }} />
          }
          onLeftClick={() => history.go(-1)}
        >
          城市选择
        </NavBar>
        {/* 城市列表start */}
        {
          cityList.length && cityList.map((v) => {
            return (
              <div key={v.title}>
                <div className={indexCss.city_title}>{v.title}</div>
                {
                  v.children && v.children.map((value, index) => {
                    return (
                      <div key={index} className={indexCss.city_item}>
                        {value.label}
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
        {/* 城市列表end */}
      </Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    currentCity: state.mapReducer.city.cityName
  }
}

export default connect(mapStateToProps)(CitySelect)
