import React from 'react'
import indexCss from './index.module.scss'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
const CityInput = React.memo(props => {
  const { city } = props
  return (
    <div className={indexCss.search}>
      <div className={indexCss.search_input}>
        <div
          className={indexCss.search_address}
          onClick={() => props.history.push('/citySelect')}
        >
          <p>{city.cityName}</p>
          <i
            className={['iconfont', 'icon-arrow', indexCss['icon-arrow']].join(
              ' '
            )}
          ></i>
        </div>
        <div
          className={indexCss.search_content}
          onClick={() => props.history.push('/search')}
        >
          <i
            className={['iconfont', 'icon-seach', indexCss['icon-seach']].join(
              ' '
            )}
          ></i>
          <p>请输入小区或地址</p>
        </div>
      </div>
      <div
        className={indexCss.search_map}
        onClick={() => props.history.push('/mapFound')}
      >
        <i
          className={['iconfont', 'icon-map', indexCss['icon-map']].join(' ')}
        ></i>
      </div>
    </div>
  )
})
const mapStateToProps = state => {
  return state.mapReducer
}
export default connect(mapStateToProps)(withRouter(CityInput))
