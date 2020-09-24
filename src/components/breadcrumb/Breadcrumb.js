import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { withRouter } from "react-router-dom";

const CustomBreadcrumb = (props) => {
  const { title } = props.match.params;

  const goBack = () => {
    props.history.goBack();
  };

  return (
    <Breadcrumb>
      <Breadcrumb.Item onClick={() => goBack()}>Home</Breadcrumb.Item>
      <Breadcrumb.Item active>
        {title.slice(0, 1).toUpperCase() +
          "" +
          title.replaceAll("-", " ").slice(1, title.length)}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default React.memo(withRouter(CustomBreadcrumb));
