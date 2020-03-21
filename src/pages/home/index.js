import React from 'react'
import { TabBar } from 'antd-mobile'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Index from '../index/index'
import Found from '../found'
import Mine from '../mine'
import News from '../news'
class TabBarExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: false,
      fullScreen: false
    }
    console.log(this.props.location.pathname)
    if (this.props.location.pathname === '/home') {
      this.props.history.push('/home/index')
    }
  }

  renderContent(pageText) {
    return (
      <Router>
        <Switch>
          <Route path="/home/index" component={Index}></Route>
          <Route path="/home/found" component={Found}></Route>
          <Route path="/home/mine" component={Mine}></Route>
          <Route path="/home/news" component={News}></Route>
        </Switch>
      </Router>
    )
  }

  render() {
    console.log(this.props)
    const {location, history} = this.props
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="rgb(33, 185, 122)"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="首页"
            icon={<i className="iconfont icon-ind"></i>}
            selectedIcon={<i className="iconfont icon-ind"></i>}
            selected={location.pathname === '/home/index'}
            onPress={() => {
              history.push('/home/index')
            }}
            data-seed="logId"
          >
            {this.renderContent('')}
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-findHouse"></i>}
            selectedIcon={<i className="iconfont icon-findHouse"></i>}
            title="找房"
            key="找房"
            selected={location.pathname === '/home/found'}
            onPress={() => {
              history.push('/home/found')
            }}
            data-seed="logId1"
          >
            {this.renderContent('')}
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-infom"></i>}
            selectedIcon={<i className="iconfont icon-infom"></i>}
            title="资讯"
            key="资讯"
            selected={location.pathname === '/home/news'}
            onPress={() => {
              history.push('/home/news')
            }}
            data-seed="logId2"
          >
            {this.renderContent('')}
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-my"></i>}
            selectedIcon={<i className="iconfont icon-my"></i>}
            title="我的"
            key="我的"
            selected={location.pathname === '/home/mine'}
            onPress={() => {
              history.push('/home/mine')
            }}
            data-seed="logId3"
          >
            {this.renderContent('')}
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}

export default TabBarExample
