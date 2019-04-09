import React, { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import Prism from 'prismjs';

class Log_4 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  renderCode_1 = () => {
    const markdown = `
      begin
      Page 63.
      Binding custom component methods
      ----------
      end
      Page 72.
      Binding custom component methods
    `;
    return markdown;
  }

  renderCode_2 = () => {
    const code = `
      handleProductUpVote(productId) {
        const nextProducts = this.state.products.map((product) => {
          if (product.id === productId) {
            return Object.assign({}, product, {
              votes: product.votes + 1,
            });
          } else {
              return product;
            }
        });
        this.setState({
          products: nextProducts,
        });
      }
    `;
    return code;
  }

  render() {

    return (
      <div>
        <ReactMarkdown source='# 1.Setting state with this.setState()' />
        <div style={{ marginBottom: 20 }}>
          <ReactMarkdown source={this.renderCode_1()} className="lang-js" />
        </div>
        <ReactMarkdown source='# 2.Updating state and immutability' />
        <div style={{ marginBottom: 20 }}>
          <ReactMarkdown source={this.renderCode_2()} className="lang-js" />
        </div>
        <ReactMarkdown source='# 3.Refactoring with the Babel plugin' />
        <ReactMarkdown source='## 3.1 Babel plugins and presets(babel-standalone)' />
        <ReactMarkdown source='# 4.Property initializers()ES7' />
        {/* <div style={{ marginBottom: 20 }}>
          <ReactMarkdown source={this.renderCode_2()} className="lang-js" />
        </div> */}
      </div>
    )
  }
}

export default Log_4;
