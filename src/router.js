import React, { Component } from 'react';
import { HashRouter as Router } from "react-router-dom";
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import BasicLayout from './components/BasicLayout';

class RouterConfig extends Component {
  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <Router>
          <BasicLayout />
        </Router>
      </LocaleProvider>
    )
  }
}

export default RouterConfig;