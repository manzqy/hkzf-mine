import React, { Component, Fragment } from 'react'
import { Carousel, WingBlank } from 'antd-mobile'
import axios, { baseURL } from '../../utils/request'
import CityInput from '../../components/CityInput'
import indexCss from './index.module.scss'
import nav1 from '../../assets/images/nav-1.png'
import nav2 from '../../assets/images/nav-2.png'
import nav3 from '../../assets/images/nav-3.png'
import nav4 from '../../assets/images/nav-4.png'
class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgList: [],
      imgHeight: 176,
      navList: [
        {
          value: '整租',
          img: nav1
        },
        {
          value: '合租',
          img: nav2
        },
        {
          value: '地图找房',
          img: nav3
        },
        {
          value: '去出租',
          img: nav4
        },
      ],
      groups: [],
      newsList: []
    }
  }
  async componentDidMount() {
    this.getImgList()
    this.getGroupList()
    this.getNewsList()
  }
  getImgList = async () => {
    const { data } = await axios({
      url: '/home/swiper'
    })
    this.setState({
      imgList: data.body
    })
  }
  getGroupList = async () => {
    const { data } = await axios({
      url: '/home/groups'
    })
    this.setState({
      groups: data.body
    })
  }
  getNewsList = async () => {
    const { data } = await axios({
      url: '/home/news'
    })
    console.log('---', data)
    this.setState({
      newsList: data.body
    })
  }
  render() {
    const {imgList, navList, imgHeight, groups, newsList} = this.state
    return (
      <Fragment>
        {/* 搜索框start */}
        <div className={indexCss.input}>
          <div className={indexCss.city_input}>
            <CityInput />
          </div>
        </div>
        {/* 搜索框end */}
        {/* 轮播图start */}
        {imgList.length && (
          <Carousel autoplay infinite>
            {imgList.map(val => (
              <a
                key={val}
                href="#123"
                style={{
                  display: 'inline-block',
                  width: '100%',
                  height: imgHeight
                }}
              >
                <img
                  src={baseURL + val.imgSrc}
                  alt=""
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'))
                    this.setState({ imgHeight: 'auto' })
                  }}
                />
              </a>
            ))}
          </Carousel>
        )}
        {/* 轮播图end */}
        {/* nav-start */} 
        <div className={indexCss.nav_list}>
            {
              navList.map(v => {
                return (
                  <div className={indexCss.nav_item} key={v.value}>
                    <div className={indexCss.nav_img}>
                      <img src={v.img} alt=""/>
                    </div>
                    <div className={indexCss.nav_content}>{v.value}</div>
                  </div>
                )
              })
            }
        </div>
        {/* nav-end */}
        {/* 租房小组start */}
        <div className={indexCss.group}>
            <div className={indexCss.group_title}>
              <h3>租房小组</h3>
              <span>更多</span>
            </div>
            <div className={indexCss.group_content}>
              {
                groups.map(v => {
                  return (
                    <div className={indexCss.group_item} key={v.id}>
                      <div className={indexCss.item_left}>
                        <h3>{v.title}</h3>
                        <p>{v.desc}</p>
                      </div>
                      <div className={indexCss.item_right}>
                        <img src={baseURL + v.imgSrc} alt=""/>
                      </div>
                    </div>
                  )
                })
              }
            </div>
        </div>
        {/* 租房小组end */}
        {/* 最新资讯start */}
        <div className={indexCss.news}>
          <div className={indexCss.news_title}>
            最新资讯
          </div>
          {
            newsList.map(v => {
              return (
                <div className={indexCss.news_item} key={v.id}>
                  <div className={indexCss.news_left}>
                    <img src={baseURL + v.imgSrc} alt=""/>
                  </div>
                  <div className={indexCss.news_right}>
                    <h3>{v.title}</h3>
                    <div className={indexCss.item_origin}>
                      <span className={indexCss.item_from}>{v.from}</span>
                      <span className={indexCss.item_date}>{v.date}</span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        {/* 最新资讯end */}
      </Fragment>
    )
  }
}

export default Index
