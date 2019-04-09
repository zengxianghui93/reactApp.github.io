import React, { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import Prism from 'prismjs';

class Log_1 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

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

  render() {

    return (
      <div>
        <ReactMarkdown source='# 1.Refactoring with the Babel plugin' />
        <div style={{ marginBottom: 20 }}>
          <ReactMarkdown source={this.renderCode_1()} className="lang-js" />
        </div>
      </div>
    )
  }
}

export default Log_1;