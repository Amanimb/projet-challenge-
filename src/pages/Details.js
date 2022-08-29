import React from 'react'
import { useParams } from 'react-router-dom';
import Product_Card from '../component/Product_Card';


const Details = ({product}) => {
    const {categorie}=useParams()
    console.log(categorie)
  return (
    <div className="list">
      {product
        .filter((el) => el.categories == categorie)
        .map((el) => (
          <Product_Card product={el} />
        ))}
    </div>
  );
}

export default Details