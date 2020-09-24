import React, { useState, Fragment } from "react";
import FormControl from "react-bootstrap/FormControl";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

const Input = (props) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const { type } = props.mode;

  const validationHandler = (value) => {
    setText(value);
    switch (type) {
      case "search":
        if (text.length < 2) {
          setError("Require at least 2 characters");

          return true;
        }
        break;
      default:
        setError("");
    }
    setError("");
    return false;
  };

  return (
    <Fragment>
      <FormControl
        onChange={(e) => validationHandler(e.target.value)}
        value={text}
        isInvalid={error}
        {...props}
      />
      <Form.Control.Feedback type="invalid" tooltip>
        {error}
      </Form.Control.Feedback>
    </Fragment>
  );
};

export default Input;

Input.propTypes = {
  type: PropTypes.string,
};
