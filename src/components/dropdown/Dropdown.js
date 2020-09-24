import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import PropTypes from "prop-types";

import "./Dropdown.scss";

const CustomDropdown = (props) => {
  const { filterHandler, currentFilter } = props;

  return (
    <DropdownButton id="dropdown-menu" title="Filters">
      <Dropdown.Divider />
      <Dropdown.Item
        href="#"
        className={`${currentFilter === "release_date" && "active"}`}
        onClick={() => filterHandler("release_date")}
      >
        Newer
      </Dropdown.Item>
      <Dropdown.Item
        href="#"
        className={`${currentFilter === "rating" && "active"}`}
        onClick={() => filterHandler("rating")}
      >
        Top Rated
      </Dropdown.Item>
      <Dropdown.Item
        href="#"
        className={`${currentFilter === "popularity" && "active"}`}
        onClick={() => filterHandler("popularity")}
      >
        Most Popular
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default React.memo(CustomDropdown);

CustomDropdown.propTypes = {
  filterHandler: PropTypes.func,
  currentFilter: PropTypes.string,
};
