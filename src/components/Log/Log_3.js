import React, { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import Prism from 'prismjs';

class Log_3 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  renderCode_1 = () => {
    const markdown = `
      begin
      Page 58.
      Binding custom component methods
      ----------
      end
      Page 63.
      Binding custom component methods
    `;
    return markdown;
  }

  render() {

    return (
      <div>
        <ReactMarkdown source='# 1.Refactoring with the Babel plugin' />
        <div style={{ marginBottom: 20 }}>
          <ReactMarkdown source={this.renderCode_1()} className="lang-html" />
        </div>
      </div>
    )
  }
}

export default Log_3;
