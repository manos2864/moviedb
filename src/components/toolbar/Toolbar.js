import React from "react";
import { Row, Col } from "react-bootstrap";

import CustomDropdown from "../dropdown/Dropdown";

const Toolbar = (props) => {
  const { results, filterHandler, filter } = props;

  return (
    <Row className="mb-2 bg-info p-sm-2 p-md-2 align-items-center" noGutters>
      <Col
        sm={{ span: 12, order: 2 }}
        xs={{ span: 12, order: 2 }}
        md={{ span: 6, order: 1 }}
        lg={{ span: 6, order: 1 }}
        xl={{ span: 6, order: 1 }}
        className="text-right text-md-left mt-2 mt-md-0 text-primary"
      >
        Results: {results}
      </Col>
      <Col
        sm={{ span: 12, order: 1 }}
        xs={{ span: 12, order: 1 }}
        md={{ span: 6, order: 2 }}
        lg={{ span: 6, order: 2 }}
        xl={{ span: 6, order: 2 }}
        className="text-right"
      >
        <CustomDropdown filterHandler={filterHandler} currentFilter={filter} />
      </Col>
    </Row>
  );
};

export default React.memo(Toolbar);
