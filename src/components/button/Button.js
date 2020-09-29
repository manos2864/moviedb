import React, { useRef } from "react";
import PropTypes from "prop-types";

import "./Button.scss";

const CustomButton = (props) => {
  const { btnName } = props;
  const btnTop = useRef();
  const btnRight = useRef();
  const btnLeft = useRef();
  const btnBottom = useRef();
  const btnText = useRef();

  return (
    <div
      className="button"
      onMouseEnter={() => {
        btnRight.current.classList.add("startAnimRight");
        btnLeft.current.classList.add("startAnimLeft");
        btnBottom.current.classList.add("startAnimBottom");
        btnText.current.classList.add("startAnimText");
      }}
      // Removing our animation onMouseLeave
      // onMouseLeave={() => {
      //   btnLeft.current.classList.remove("startAnimLeft");
      //   btnBottom.current.classList.remove("startAnimBottom");
      //   btnRight.current.classList.remove("startAnimRight");
      //   btnText.current.classList.remove("startAnimText");
      // }}
    >
      <div ref={btnTop} className="top"></div>
      <div ref={btnLeft} className="left"></div>
      <p ref={btnText}>{btnName}</p>
      <div ref={btnRight} className="right"></div>
      <div ref={btnBottom} className="bottom"></div>
    </div>
  );
};

export default React.memo(CustomButton);

CustomButton.propTypes = {
  btnName: PropTypes.string,
};
