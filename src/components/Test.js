import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Test extends PureComponent {
  static contextTypes = {
    changeContent: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      age: '100',
      text: '111',
    }
    this.name = 'default name';
  }

  handleChildClick = () => {
    this.context.changeContent();
  }

  handleStateChange = () => {
    this.setState({text: '泰达米尔'})
  }

  handleThisClick = () => {
    this.name = 'zeng';
  }

  renderStateChange = () => {
    console.log('1111');
    return (
      <div>{this.state.age}</div>
    )
  }

  render() {
    console.log('render');
    return (
      <div>
        <div style={{paddingBottom: 20}}>{this.props.content}.</div>
        <div style={{paddingBottom: 20}}><button onClick={this.handleChildClick}>child</button></div>
        <div style={{paddingBottom: 20}}><button onClick={this.handleStateChange}>PureComponent 改变自身state</button></div>
        <div style={{paddingBottom: 20}}>age:{this.renderStateChange()}</div>
        <div style={{paddingBottom: 20}}><button onClick={this.handleThisClick}>this change</button>--{this.name}</div>
      </div>
      
    )
  }
}

export default Test;
