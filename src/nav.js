import React from 'react';
import { Switch, Route } from "react-router-dom";

import ArticleCard from './components/ArticleCard'; 
import About from './components/About'; 
import Inbox from './components/Inbox';
import Charpater_1 from './components/charpater_1';


class Nav extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={ArticleCard} />
        <Route path="/about" component={About} />
        <Route path="/inbox" component={Inbox} />
        <Route path="/charpater_1" component={Charpater_1} />
      </Switch>
    )
  }
}

export default Nav;