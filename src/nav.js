import React from 'react';
import { Switch, Route } from "react-router-dom";

import ArticleCard from './components/ArticleCard'; 
import About from './components/About'; 
import Inbox from './components/Inbox';
import Charpater_1 from './components/charpater_1';
import Charpater_2 from './components/charpater_2';
import Log_1 from './components/Log/Log_1';


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
      </Switch>
    )
  }
}

export default Nav;