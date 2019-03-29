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
            <SubMenu key="sub3" title={<span><Icon type="notification" />Fullstack-React</span>}>
              <Menu.Item key="9"><Link className={styles['sider-menu-link']} to="/charpater_1">charpater_1</Link></Menu.Item>
              <Menu.Item key="10"><Link className={styles['sider-menu-link']} to="/option2">option2</Link></Menu.Item>
              <Menu.Item key="11"><Link className={styles['sider-menu-link']} to="/option3">option3</Link></Menu.Item>
              <Menu.Item key="12"><Link className={styles['sider-menu-link']} to="/option4">option4</Link></Menu.Item>
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