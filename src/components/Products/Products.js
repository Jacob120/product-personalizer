import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);

  return (
    <section>
    {productsData.map(() =>  <Product {...products[0]} />)} 
    </section>
  );
};

export default Products;