import React, { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';

class Log_1 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidUpdate

  renderCode_1 = () => {
    const markdown = `
      class ProductList extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            products: [],
          }; 
        }
        componentDidMount() {
          this.setState({ products: Seed.products });
        }
      }  
    `;

    return markdown;
  }

  renderCode_2 = () => {
    return `create database hero;`;
  }

  render() {
    // style={{background: '#000', color: '#fff'}}
    const input = '# This is a header\n\nAnd this is a paragraph';
    return (
      <div>
        <ReactMarkdown source='# 1.componentDidUpdate'/>
        <div style={{background: '#000', color: '#fff', marginBottom: 20}}>
          <ReactMarkdown source={this.renderCode_1()}/>
        </div>
        <div>
          <ReactMarkdown source={input}/>
        </div>
      </div>
    )
  }
}

export default Log_1;