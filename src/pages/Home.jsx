import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Sort, Categories, ProductList } from '../components';
import { setCategory } from '../redux/actions/filters';

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const sortList = [
	{ name: 'популярности', type: 'popular' },
	{ name: 'цене', type: 'price' },
	{ name: 'алфавиту', type: 'alphabet' },
];

const Home = () => {
	const dispatch = useDispatch();
	const products = useSelector(({ products }) => products.items);

	const onSelectCategory = useCallback((index) => {
		dispatch(setCategory(index));
	}, []);

	return (
		<div className="container">
			<div className="content__top">
        <Categories 
          categories={categories}
          onClickItem={onSelectCategory}
        />
				<Sort sortList={sortList} />
			</div>
			<ProductList products={products} />
		</div>
	);
};

export default Home;
