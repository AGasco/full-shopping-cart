import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  filterProductsBySize,
  sortProductsBy,
} from "./../redux/actions/productActionCreators";
import "./../styles/Filter.css";

function Filter({ count, size, orderBy, filterBySize, sortBy }) {
  useEffect(() => {
    sortBy(orderBy);
  }, [size]);

  const handleFilterBySize = (e) => {
    filterBySize(e.target.value);
  };

  const handleSort = (e) => {
    sortBy(e.target.value);
  };

  return (
    <div className="filter">
      <div className="filter__results">{count} Products</div>
      <div className="filter__sort">
        Order by:{" "}
        <select value={orderBy} onChange={handleSort}>
          <option value="latest">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <div className="filter__size">
        Filter{" "}
        <select value={size} onChange={handleFilterBySize}>
          <option value="ALL">ALL</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.products.products.length,
    size: state.products.size,
    orderBy: state.products.orderBy,
  };
};

const mapDispatchToProps = {
  filterBySize: filterProductsBySize,
  sortBy: sortProductsBy,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
