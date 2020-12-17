import React from 'react';
import PropTypes from 'prop-types';

const Categories = ({ categories, onCategoryClick, activeCategory }) => {
	return (
		<div className="categories">
			<ul>
				<li
					onClick={() => onCategoryClick(null)}
					className={activeCategory === null ? 'active' : ''}
				>
					Все
				</li>
				{categories &&
					categories.map((category, index) => (
						<li
							className={index === activeCategory ? 'active' : ''}
							onClick={() => onCategoryClick(index)}
							key={`${category}_${index}`}
						>
							{category}
						</li>
					))}
			</ul>
		</div>
	);
};

Categories.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.string),
	onCategoryClick: PropTypes.func,
};

export default Categories;
