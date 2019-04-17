import React, { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { Button } from 'antd';

class Log_6 extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   }
  // }
  state = {
    name: 'zoro'
  };

  handleBtnClick = () => {
    this.setState({ name: 'i am zoro'});
  }

  renderCode_1 = () => {
    const markdown = `
      begin
      Page 76.
      ----------
      end
      Page 76.
    `;
    return markdown;
  }

  renderCode_2 = () => {
    const code = `
      class Product extends React.Component { 
        constructor(props) {
          super(props);
          this.handleUpVote = this.handleUpVote.bind(this);
        }
        handleUpVote() { 
          this.props.onVote(this.props.id);
        }
      }
    `;
    return code;
  }

  render() {
    const Component = () => {
      const codeString = `
      class Product extends React.Component { 
        constructor(props) {
          super(props);
          this.handleUpVote = this.handleUpVote.bind(this);
        }
        handleUpVote() { 
          this.props.onVote(this.props.id);
        }
      }
    `;
      return <SyntaxHighlighter language='javascript' style={docco}>{codeString}</SyntaxHighlighter>;  
    }

    return (
      <div>
        <ReactMarkdown source='# 1.Reading....' />
        <div style={{ marginBottom: 20 }}>
          <ReactMarkdown source={this.renderCode_1()} className="lang-js" />
        </div>
        <ReactMarkdown source='# 2.Refactoring Product' />
        <div style={{ marginBottom: 20 }}>
          <ReactMarkdown source={this.renderCode_2()} className="lang-js" />
        </div>
        <div style={{ marginBottom: 20 }}>
          <Button type="primary" size="small" ghost onClick={this.handleBtnClick}>chane text</Button>
          <span>text: {this.state.name}</span>
        </div>
        {Component()}
        {/* {Component1()} */}
        {/* <ReactMarkdown source='# 3.Refactoring with the Babel plugin' />
        <ReactMarkdown source='## 3.1 Babel plugins and presets(babel-standalone)' />
        <ReactMarkdown source='# 4.Property initializers()ES7' /> */}
      </div>
    )
  }
}

export default Log_6;
