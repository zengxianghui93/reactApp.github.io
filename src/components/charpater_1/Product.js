import React from 'react';

class Product extends React.Component {
  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img src='https://avatars2.githubusercontent.com/u/17396286?s=40&v=4'/>  
        </div>
        <div className='content'>
          <div className='description'>
            <a>Fort Knight</a>
            <p>Authentic renaissance actors, delivered in just two weeks.</p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img
              className='ui avatar image'
              src='https://avatars2.githubusercontent.com/u/17396286?s=40&v=4'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Product;