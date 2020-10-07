import React from "react";
import Toast from "react-bootstrap/Toast";
import { useDispatch, useSelector } from "react-redux";

import { setError } from "../../store/actions/action";
import { errorSelectorMemo } from "../../store/selectors/selectors";

const CustomToast = () => {
  const error = useSelector(errorSelectorMemo);
  const dispatch = useDispatch();

  return (
    <Toast
      className="fixed-bottom mx-auto mb-5"
      show={error !== null}
      onClose={() => dispatch(setError())}
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

export default CustomToast;
