import React from "react";
import PropTypes from "prop-types";
import "./Filter.scss";

const Filter = props => {
  return (
    <div className="filter-wrapper">
      <ul className="filters">
        {props.data.map((filter, index) => {
          return (
            <li className="filter" key={index} onClick={() => props.onClick(filter.FILTER)}>
              <span>
                {filter.NAME}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Filter.defaultProps = {
  data: []
};

Filter.propTypes = {
  data: PropTypes.array.isRequired
};

export default Filter;
