import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(({ categories, onClickItem }) => {
	const [activeCategory, setActiveCategory] = useState(null);
	/**
   * Handle category
   * @param {number} index index of category in list
   */
  const handleCategory = (index) => {
		setActiveCategory(index);
		onClickItem(index);
	};

	return (
		<div className="categories">
			<ul>
				<li
					onClick={() => handleCategory(null)}
					className={activeCategory === null ? 'active' : ''}
				>
					Все
				</li>
				{categories && (
					categories.map((category, index) => (
						<li
							className={index === activeCategory ? 'active' : ''}
							onClick={() => handleCategory(index)}
							key={`${category}_${index}`}
						>
							{category}
						</li>
					))
				)}
			</ul>
		</div>
	);
});

Categories.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.string),
};

export default Categories;
