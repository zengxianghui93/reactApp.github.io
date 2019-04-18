import React from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
import Nav from '../nav';
import Header from './Header';
import MiniHeader from './MiniHeader';

import styles from './BasicLauout.module.less';

const { Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class BasicLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      isBreakpoint: false
    }
  }

  onBreakpointChange = (isBreakpoint) => {
    this.setState({isBreakpoint});
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    return (
      <Layout className={styles['basic-layout-wrap']}>
        <Sider 
          width={200} 
          style={{ background: '#fff' }}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={this.onBreakpointChange}
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <Menu.Item key="1">
              <Link className={styles['sider-menu-link']} to="/">SpaceBox</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="trophy" />
              <Link className={styles['sider-menu-link']} to="/about">最新文章</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="schedule" />
              <Link className={styles['sider-menu-link']} to="/inbox">文章存档</Link>
            </Menu.Item>
            <SubMenu key="sub3" title={<span><Icon type="notification" />Fullstack-React Part I</span>}>
              <Menu.Item key="9"><Link className={styles['sider-menu-link']} to="/charpater_1" title="charpater_1">charpater_1</Link></Menu.Item>
              <Menu.Item key="10"><Link className={styles['sider-menu-link']} to="/charpater_2" title="React子组件调用父组件更新数据">React子组件调用父组件更新数据</Link></Menu.Item>
              <Menu.Item key="11"><Link className={styles['sider-menu-link']} to="/option3" title="Your first Reavt Web Application">Your first Reavt Web Application</Link></Menu.Item>
              <Menu.Item key="12"><Link className={styles['sider-menu-link']} to="/option4" title="Components">Components</Link></Menu.Item>
              <Menu.Item key="13"><Link className={styles['sider-menu-link']} to="/option4" title="Components & Servers">Components & Servers</Link></Menu.Item>
              <Menu.Item key="14"><Link className={styles['sider-menu-link']} to="/option4" title="JSX and the Virtual DOM">JSX and the Virtual DOM</Link></Menu.Item>
              <Menu.Item key="15"><Link className={styles['sider-menu-link']} to="/option4" title="Advanced Component Configuration with props, state, and children">Advanced Component Configuration with props, state, and children</Link></Menu.Item>
              <Menu.Item key="16"><Link className={styles['sider-menu-link']} to="/option4" title="Forms">Forms</Link></Menu.Item>
              <Menu.Item key="17"><Link className={styles['sider-menu-link']} to="/option4" title="Using Webpack with Creat React App">Using Webpack with Creat React App</Link></Menu.Item>
              <Menu.Item key="18"><Link className={styles['sider-menu-link']} to="/option4" title="Unit Testing">Unit Testing</Link></Menu.Item>
              <Menu.Item key="19"><Link className={styles['sider-menu-link']} to="/option4" title="Routing">Routing</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="log" title={<span><Icon type="notification" />Learing Log</span>}>
              <Menu.Item key="1"><Link className={styles['sider-menu-link']} to="/log_1">2019-04-02</Link></Menu.Item>
              <Menu.Item key="2"><Link className={styles['sider-menu-link']} to="/log_2">2019-04-03</Link></Menu.Item>
              <Menu.Item key="3"><Link className={styles['sider-menu-link']} to="/log_3">2019-04-08</Link></Menu.Item>
              <Menu.Item key="4"><Link className={styles['sider-menu-link']} to="/log_4">2019-04-09</Link></Menu.Item>
              <Menu.Item key="5"><Link className={styles['sider-menu-link']} to="/log_5">2019-04-10</Link></Menu.Item>
              <Menu.Item key="6"><Link className={styles['sider-menu-link']} to="/log_6">2019-04-11</Link></Menu.Item>
              <Menu.Item key="7"><Link className={styles['sider-menu-link']} to="/log_7">2019-04-16</Link></Menu.Item>
              <Menu.Item key="8"><Link className={styles['sider-menu-link']} to="/log_8">2019-04-17</Link></Menu.Item>
              <Menu.Item key="9"><Link className={styles['sider-menu-link']} to="/log_9">2019-04-18</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          {!this.state.isBreakpoint && <Header title="最近更新" />}
          {this.state.isBreakpoint && <MiniHeader title="SpaceBox"/>}
          <Nav />
          
        </Content>
      </Layout>
    )
  }
}

export default BasicLayout;