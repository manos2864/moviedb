import React from "react";
import Spinner from "react-bootstrap/Spinner";

const CustomSpinner = () => {
  return (
    <Spinner animation="border" variant="primary" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default React.memo(CustomSpinner);
