import React from 'react';
import {Link} from 'react-router-dom';

const ProductList = ({product}) => {
    console.log(product.images);
  return (
    <div className='product_card'>
        <img src={product.images[0].url} alt='img' />
        <div className='product_box'>
            <h2 title ={product.title}>{product.title}</h2>
            <span>{product.price}.00 Rs.</span>
            <p>{product.description}</p>
        </div>
        <div className='row_btn'>
          <Link id = '#buy_btn' to = {`#!`}>Buy Now</Link>
          <Link id = '#btn_view' to = {`detail/${product._id}`}>View Now</Link>
        </div>
    </div>
  )
}

export default ProductList