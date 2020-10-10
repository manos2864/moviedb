import React, { Fragment } from "react";
import Pagination from "react-bootstrap/Pagination";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";

const CustomPagination = ({ pages, active, pageHandler, query }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  let items = [];
  for (let num = 1; num <= pages; num++) {
    items.push(
      <Fragment key={num}>
        <Pagination.Item
          active={num === active}
          onClick={() => {
            pageHandler(query, num);
            scrollToTop();
          }}
        >
          {num}
        </Pagination.Item>
        {num === active && <Pagination.Ellipsis />}
        {num === active + 6 && <Pagination.Ellipsis />}
      </Fragment>
    );
  }

  return (
    <Row className="p-4">
      <Col className="text-center">
        <Pagination className="justify-content-center flex-wrap">
          <Pagination.First
            onClick={() => {
              pageHandler(query, 1);
              scrollToTop();
            }}
          />
          {active > 1 && (
            <Pagination.Prev
              onClick={() => {
                pageHandler(query, active - 1);
                scrollToTop();
              }}
            />
          )}
          {/* How many items to show in the middle of pagination */}
          {items.slice(active - 1, active + 7)}
          {active < pages && (
            <Pagination.Next
              onClick={() => {
                pageHandler(query, active + 1);
                scrollToTop();
              }}
            />
          )}
          <Pagination.Last
            onClick={() => {
              pageHandler(query, pages);
              scrollToTop();
            }}
          />
        </Pagination>
      </Col>
    </Row>
  );
};

export default React.memo(CustomPagination);

Pagination.propTypes = {
  query: PropTypes.string,
  pages: PropTypes.number,
  active: PropTypes.number,
  pageHandler: PropTypes.func,
};
