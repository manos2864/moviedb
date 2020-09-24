import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <Row className="pl-4 pr-4 pt-4 pb-1 bg-primary" noGutters>
      <Col lg={6} xl={6} className="text-info text-center">
        <h2>Sites We Like:</h2>
        <a
          href="https://www.rottentomatoes.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width={100}
            height={"auto"}
            className="mr-3"
            src="https://www.rottentomatoes.com/assets/pizza-pie/images/rtlogo.9b892cff3fd.png"
            alt="rotten tomatoes"
          />
        </a>
        <a
          href="https://www.imdb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width={95}
            height={"auto"}
            className="mr-3"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png"
            alt="imdb"
          />
        </a>
      </Col>
      <Col lg={6} xl={6} className="text-info text-center">
        <h2>Follow us:</h2>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width={45}
            height={"auto"}
            className="mr-3"
            src="https://1.bp.blogspot.com/-WSdqH3gMHDk/U-xndvvQYrI/AAAAAAAABwg/9OLHbIjiTF8/s1600/facebook%2Blogo%2Bpng%2Btransparent%2Bbackground.png"
            alt="facebook"
          />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width={52}
            height={"auto"}
            className="mr-3"
            src="https://i.pinimg.com/originals/a2/5f/4f/a25f4f58938bbe61357ebca42d23866f.png"
            alt="instagram"
          />
        </a>
      </Col>
      <Col lg={12} xl={12} className="text-center mt-5">
        <small className="text-info">© themoviedb.com Team</small>
      </Col>
    </Row>
  );
};

export default React.memo(Footer);
