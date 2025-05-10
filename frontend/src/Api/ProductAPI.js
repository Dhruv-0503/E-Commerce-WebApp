import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductAPI = () => {

  const [products, setProducts] = useState([]);
  
  const getProducts = async() =>{
    const res = await axios.get('/api/products');
    setProducts(res.data)
  }

  useEffect(()=>{
    getProducts();
  },[]);

  return {
    products
  }
}

export default ProductAPI