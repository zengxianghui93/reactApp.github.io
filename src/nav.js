import React from 'react';
import { Switch, Route } from "react-router-dom";

import ArticleCard from './components/ArticleCard'; 
import About from './components/About'; 
import Inbox from './components/Inbox';
import Charpater_1 from './components/charpater_1';
import Charpater_2 from './components/charpater_2';
import Log_1 from './components/Log/Log_1';
import Log_2 from './components/Log/Log_2';
import Log_3 from './components/Log/Log_3';
import Log_4 from './components/Log/Log_4';
import Log_5 from './components/Log/Log_5';
import Log_6 from './components/Log/Log_6';
import Log_7 from './components/Log/Log_7';
import Log_8 from './components/Log/Log_8';
import Log_9 from './components/Log/Log_9';
import Log_10 from './components/Log/Log_10';
import Log_11 from './components/Log/Log_11';

class Nav extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={ArticleCard} />
        <Route path="/about" component={About} />
        <Route path="/inbox" component={Inbox} />
        <Route path="/charpater_1" component={Charpater_1} />
        <Route path="/charpater_2" component={Charpater_2} />
        <Route path="/log_1" component={Log_1} />
        <Route path="/log_2" component={Log_2} />
        <Route path="/log_3" component={Log_3} />
        <Route path="/log_4" component={Log_4} />
        <Route path="/log_5" component={Log_5} />
        <Route path="/log_6" component={Log_6} />
        <Route path="/log_7" component={Log_7} />
        <Route path="/log_8" component={Log_8} />
        <Route path="/log_9" component={Log_9} />
        <Route path="/log_10" component={Log_10} />
        <Route path="/log_11" component={Log_11} />
      </Switch>
    )
  }
}

export default Nav;