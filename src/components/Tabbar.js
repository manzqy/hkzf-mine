import React from 'react'
import { TabBar } from 'antd-mobile'
import './Tabbar.css'
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  withRouter
} from 'react-router-dom'
import Found from '../pages/found'
import Home from '../pages/home'
import Mine from '../pages/mine'
import News from '../pages/news'
class TabBarExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false
    }
  }

  renderContent(pageText) {
    console.log(pageText)
    return (
      <Router>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/found" component={Found}></Route>
          <Route path="/mine" component={Mine}></Route>
          <Route path="/news" component={News}></Route>
        </Switch>
      </Router>
    )
  }

  render() {
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
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab'
              })
              this.props.history.push('/home')
            }}
            data-seed="logId"
          >
            {this.renderContent('/home')}
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-findHouse"></i>}
            selectedIcon={<i className="iconfont icon-findHouse"></i>}
            title="找房"
            key="找房"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab'
              })
              this.props.history.push('/found')
            }}
            data-seed="logId1"
          >
            {this.renderContent('/found')}
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-infom"></i>}
            selectedIcon={<i className="iconfont icon-infom"></i>}
            title="资讯"
            key="资讯"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab'
              })
              this.props.history.push('/news')
            }}
          >
            {this.renderContent('/news')}
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-my"></i>}
            selectedIcon={<i className="iconfont icon-my"></i>}
            title="我的"
            key="我的"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab'
              })
              this.props.history.push('/mine')
            }}
          >
            {this.renderContent('/mine')}
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}

export default withRouter(TabBarExample)
