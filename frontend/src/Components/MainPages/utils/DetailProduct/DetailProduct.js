import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState';
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar } from "react-icons/fa";

const DetailProduct = () => {
    const params = useParams();
    const state = useContext(GlobalState);
    const products = state.productAPI.products;

    const [detailProduct, setDetailProduct] = useState([]);

    useEffect(() => {
        if (params) {
            products.forEach(product => {
                if (product._id === params.id) setDetailProduct(product)
            })
        }
    }, [params, products]);
    console.log(detailProduct);
    if (detailProduct.length === 0) return null;
    return (
        <>
            <div className='detail_products'>
                <img src={detailProduct.images[0].url} alt='dimg1' />
                <div className='detail_product_box'>
                    <div className='product_box'>
                        <h2 title={detailProduct.title}>{detailProduct.title}</h2>
                        <span>{detailProduct.price}.00 Rs.</span>
                        <p><b>Description : </b>{detailProduct.description}</p>
                        <p><b>Content : </b>{detailProduct.content}</p>
                        <p><b>Total Sold : </b>{detailProduct.sold}</p>
                    </div>
                    <div className='row_btn'>
                        <Link id='#buy_btn' to={`#!`}>Buy Now</Link>
                        <Link id='#buy_btn' to={`#!`}>Add To Cart</Link>
                    </div>
                </div>
            </div>
            <div className='other_content'>
                <div className='customer_box'>
                    <span>Customer Reviews</span>
                    <div className='cus_details'>
                        <img src='https://cdn-icons-png.flaticon.com/512/7077/7077313.png' alt='cus_pro' />
                        <div className='cus_rating'>
                            <p>Dhruv Patel</p>
                            <p><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></p>
                        </div>
                    </div>
                    <div className='cus_review'>
                        <p>I recently purchased this product, and I am extremely happy with my experience! The quality is excellent.It has definitely exceeded my expectations in terms of efficiency and reliability.The value for the price is great, making it a worthwhile investment. I would highly recommend it to anyone looking for something reliable and effective. Overall, a fantastic product that delivers exactly what it promises!</p>
                    </div>
                    <div className='cus_details'>
                        <img src='https://img.freepik.com/premium-vector/portrait-beautiful-women-round-frame-avatar-female-character-isolated-white-background_559729-213.jpg' alt='cus_pro' />
                        <div className='cus_rating'>
                            <p>Dhruvi Patel</p>
                            <p><FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar /></p>
                        </div>
                    </div>
                    <div className='cus_review'>
                        <p>The product is decent, but it has some drawbacks. It works as expected for the most part, but I noticed a few issues that could be improved. The quality is average, and while it gets the job done, it does not feel very durable. It is easy to use, but sometimes it does not perform as smoothly as I had hoped. The design is nice, but there are some minor flaws. For the price, it is okay, but I expected a bit more.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailProduct