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
    const input = '# This is a header\n\nAnd this is a paragraph';

    return (
      <div>
        <ReactMarkdown source='# 1.componentDidUpdate' />
        <div style={{ marginBottom: 20 }}>
          <ReactMarkdown source={this.renderCode_1()} className="lang-js" />
        </div>
        <div>
          <ReactMarkdown source={input} />
        </div>
      </div>
    )
  }
}

export default Log_1;