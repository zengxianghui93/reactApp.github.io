// import ProductList from './ProductList';
// export default ProductList;
import React from 'react';
import { Divider } from 'antd';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>
        child:
        {
          `
          1.child <a onClick={this.handleUpVote}></a>
          2.handleUpVote() {this.props.onVote(this.props.id) }
          `
        }
        </p>
        <Divider />
        <p>
        parent:
        {
          `
          1.onVote={this.handleProductUpVote}
          2.handleProductUpVote(productId) {
            console.log(productId + ' was upvoted.');
          }
          `
        }
        </p>
      </div>
    )
  }
}

export default App;
