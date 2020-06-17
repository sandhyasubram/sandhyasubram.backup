import React from "react";

import PropTypes from "prop-types";
import { Tile } from "../../components";
import "./List.scss";

const List = props => {
  const _renderTiles = () => {
    let productList = [];
    if (props.data.length === 0) {
      productList.push(
        <div key={0}>
          No Designs for this filter
        </div>
      );
    } else {
      props.data.forEach((item, index) => {
        productList.push(
          <div className={`tiles ${item.CATEGORY.join(" ")}`} key={index}>
            <Tile data={item} />
          </div>
        );
      });
    }
    return productList;
  };

  return (
    <div className={`list-wrapper ${props.column}`}>
      {_renderTiles()}
    </div>
  );
};

List.defaultProps = {
  data: [],
  column: "three"
};

List.propTypes = {
  data: PropTypes.array.isRequired,
  column: PropTypes.string
};

export default List;
