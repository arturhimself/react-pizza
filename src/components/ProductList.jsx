import React from 'react';
import PropTypes from 'prop-types';
import { Product } from './';

const ProductList = ({ products }) => (
  <>
		<h2 className="content__title">Все пиццы</h2>
		<div className="content__items">
			{products.map((product) => (
        <Product 
          key={product.id} 
          name={product.name}
          imageUrl={product.imageUrl}
          types={product.types}
          sizes={product.sizes}
          price={product.price}
          rating={product.rating}
          category={product.category}
        />
      ))}
		</div>
  </>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

export default ProductList;
