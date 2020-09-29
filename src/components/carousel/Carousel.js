import React from "react";
import Carousel from "react-bootstrap/Carousel";
import PropTypes from "prop-types";

import "./Carousel.scss";

const CustomCarousel = (props) => {
  const { slideText } = props;
  return (
    <Carousel>
      <Carousel.Item>
        {slideText.horror.component}
        <Carousel.Caption className="captionColor">
          <h3 className="lead">{slideText.horror.h3Text}</h3>
          <p>{slideText.horror.pText}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {slideText.bike.component}
        <Carousel.Caption className="captionColor">
          <h3 className="lead">{slideText.bike.h3Text}</h3>
          <p>{slideText.bike.pText}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default React.memo(CustomCarousel);

CustomCarousel.propTypes = {
  slideText: PropTypes.object,
};
