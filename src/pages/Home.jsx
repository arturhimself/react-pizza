import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/products';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { addProductToCart } from '../redux/actions/cart';
import { 
	Sort, 
	Categories, 
	Product, 
	LoadingBlock 
} from '../components';

const categories = [
	'Мясные', 
	'Вегетарианская', 
	'Гриль', 
	'Острые', 
	'Закрытые'
];
const sortList = [
	{ 
		name: 'популярности', 
		type: 'rating', 
		order: 'desc', 
	},
	{ 
		name: 'цене', 
		type: 'price', 
		order: 'desc', 
	},
	{ 
		name: 'алфавиту', 
		type: 'name', 
		order: 'asc', 
	},
];

const Home = () => {
	const dispatch = useDispatch();
	const products = useSelector(({ products }) => products.items);
	const isLoaded = useSelector(({ products }) => products.isLoaded);
	const cartItems = useSelector(({ cart }) => cart.items);
	const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
		dispatch(fetchProducts(sortBy, category));
	}, [category, sortBy]);
	
	const onSelectCategory = useCallback((index) => {
		dispatch(setCategory(index));
	}, []);

	const setActiveSort = useCallback((sortItem) => {
		dispatch(setSortBy(sortItem));
	}, []);

	/**
	 * Add product to cart
	 * @param {Object} product 
	 */
	const handleAddProductToCart = (product) => {
		dispatch(addProductToCart(product));
	};

	return (
		<div className="container">
			<div className="content__top">
				<Categories 
					activeCategory={category}
          categories={categories} 
          onClickCategory={onSelectCategory}
        />
				<Sort 
					sortList={sortList} 
					activeSort={sortBy}
					onClickSort={setActiveSort}
				/>
			</div>
			<h2 className="content__title">{category === null ? 'Все пиццы' : categories[category]}</h2>
			<div className="content__items">
				{
					isLoaded ?
					products.map((product) => (
						<Product 
							key={product.id}
							onClickAddProduct={handleAddProductToCart}
							{...product}
							cartItems={cartItems[product.id] && cartItems[product.id].items.length}
						/>
					)) : 
					Array(12).fill(0).map((_, index) => <LoadingBlock key={index} />)
				}
			</div>
		</div>
	);
};

export default Home;
