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
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' },
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