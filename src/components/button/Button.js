import React, { useRef } from "react";
import PropTypes from "prop-types";

import "./Button.scss";

const CustomButton = (props) => {
  const { btnName } = props;
  const btnCustom = useRef();
  return (
    <button
      onMouseEnter={() => {
        btnCustom.current.classList.add("startAnimation");
        btnCustom.current.classList.remove("endAnimation");
      }}
      onMouseLeave={() => {
        btnCustom.current.classList.remove("startAnimation");
        btnCustom.current.classList.add("endAnimation");
      }}
      ref={btnCustom}
      className="customBtn"
    >
      {btnName}
    </button>
  );
};

export default React.memo(CustomButton);

CustomButton.propTypes = {
  btnName: PropTypes.string,
};
