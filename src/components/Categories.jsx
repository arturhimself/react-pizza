import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(({ 
	activeCategory, 
	categories, 
	onClickCategory
}) => (
	<div className="categories">
		<ul>
			<li
				onClick={() => onClickCategory(null)}
				className={activeCategory === null ? 'active' : ''}
			>
				Все
			</li>
			{categories && (
				categories.map((category, index) => (
					<li
						className={index === activeCategory ? 'active' : ''}
						onClick={() => onClickCategory(index)}
						key={`${category}_${index}`}
					>
						{category}
					</li>
				))
			)}
		</ul>
	</div>
));

Categories.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.string),
	activeCategory: PropTypes.number,
	onClickCategory: PropTypes.func,
};

export default Categories;
