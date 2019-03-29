import React from 'react';
import Product from './Product';

class ProductList extends React.Component {
  render() {
    return (
      <div className="product-wrap">
        <Product />
      </div>
    );
  }
}

export default ProductList;