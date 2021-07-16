import React from "react";
import PropTypes, { object } from "prop-types";

const Category = (props) => {
  let { category, items } = props.item;
  let { bgShade, BulletColor } = props.colors;
  return (
    <div className="categoryContainer" style={{ backgroundColor: bgShade }}>
      <h3>
        <span
          className="bullet"
          style={{ backgroundColor: BulletColor }}
        ></span>
        {category}
      </h3>
      {items.map((item, index) => (
        <p key={index}>
          {item.score} {item.name}
        </p>
      ))}
    </div>
  );
};
Category.propTypes = {
  item: PropTypes.shape({
    category: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        score: PropTypes.number,
        categories: PropTypes.string,
      })
    ),
  }).isRequired,
  colors: PropTypes.shape({
    bgShade: PropTypes.string,
    BulletColor: PropTypes.string,
  }),
};

export default Category;
