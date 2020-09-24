import React from "react";
import Toast from "react-bootstrap/Toast";
import PropTypes from "prop-types";

const CustomToast = (props) => {
  const { error, errorHandler } = props;

  return (
    <Toast
      className="fixed-bottom mx-auto mb-5"
      show={error !== null}
      onClose={() => errorHandler()}
      delay={3000}
      autohide
    >
      <Toast.Header>
        <strong className="mr-auto">Error!</strong>
      </Toast.Header>
      <Toast.Body>{error}</Toast.Body>
    </Toast>
  );
};

export default React.memo(CustomToast);

CustomToast.propTypes = {
  error: PropTypes.string,
  errorHandler: PropTypes.func,
};
