import React from 'react';
import PropTypes from 'prop-types';
import { Sort, Categories, ProductList } from '../components';

const Home = ({ products }) => {
  const categories = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];
  const sortList = [
    'популярности',
    'цене',
    'алфавиту'
  ];

	return (
		<div className="container">
			<div className="content__top">
				<Categories categories={categories} />
				<Sort sortList={sortList} />
			</div>
			<ProductList products={products} />
		</div>
	);
};

Home.propTypes = {
	products: PropTypes.arrayOf(PropTypes.object),
};

export default Home;