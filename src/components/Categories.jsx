import { React, useState } from 'react';
import PropTypes from 'prop-types';

const Categories = ({ categories }) => {
	const [activeCategory, setActiveCategory] = useState(null);

	/**
   * Handle category
   * @param {number} index 
   */
  const handleCategory = (index) => {
    setActiveCategory(index);
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
};

Categories.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.string),
};

export default Categories;
