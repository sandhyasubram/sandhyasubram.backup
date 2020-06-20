import React from "react";
import PropTypes from "prop-types";
import { Strings } from "../../constants";
import "./Filter.scss";

const Filter = props => {
  return (
    <div className="filter-wrapper">
      <ul className="filters">
        {props.data.map((filter, index) => {
          return (
            <li
              className={`filter ${props.activeFilter === filter.FILTER
                ? "active"
                : ""}`}
              key={index}
              onClick={() => props.onClick(filter.FILTER)}
            >
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
  data: [],
  activeFilter: Strings.IMAGE_CATEGORY.ALL.FILTER
};

Filter.propTypes = {
  data: PropTypes.array.isRequired,
  activeFilter: PropTypes.string
};

export default Filter;
