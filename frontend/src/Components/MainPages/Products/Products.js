import React, { useContext } from 'react';
import { GlobalState } from '../../../GlobalState';
import ProductList from '../utils/ProductList/ProductList';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const Products = () => {
  const state = useContext(GlobalState);
  const products = state.productAPI.products

  const images = [
    "/Assets/image1.jpg",
    "/Assets/image2.jpg",
    "/Assets/image3.jpg",
    "/Assets/image4.jpg"
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <Link to= {'/products'}>
              <img src={img} alt={`slide-${index}`} className="slider-image" />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
      <div className='products'>
        {
          products.map(product => {
            return <ProductList key={product.id} product={product} />
          })
        }
      </div>
    </>
  )
}

export default Products 
