import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";

import { withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";

import logo from "../../assets/logo/logo.png";
import Input from "../input/Input";
import "./Header.scss";

import { asyncGet } from "../../store/actions/action";

const Header = (props) => {
  const dispatch = useDispatch();

  const searchHandler = (event) => {
    event.preventDefault();
    if (event.target[0].value.length > 2) {
      dispatch(asyncGet(event.target[0].value, 1));
    }
  };

  const goToPage = (page) => {
    props.history.push({ pathname: "/" + page });
  };

  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      className="rounded-bottom mb-2"
    >
      <Navbar.Brand
        onClick={() => goToPage("")}
        className="mr-0 pb-0 pt-0 d-none d-sm-block brandLogo"
      >
        <img src={logo} className="d-inline-block w-75" alt="movie db logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => goToPage("")} className="navItem">
            Home
          </Nav.Link>
          <Nav.Link
            href="https://www.opensubtitles.org/gr/el"
            target="_blank"
            className="navItem"
          >
            Subtitles
          </Nav.Link>
          <Nav.Link onClick={() => goToPage("about-us")} className="navItem">
            About us
          </Nav.Link>
        </Nav>
        <Form onSubmit={searchHandler} inline>
          <Form.Group as={Col} md="12" controlId="validationFormik103">
            <Input
              mode={{
                type: "search",
              }}
              type="text"
              placeholder="Star Wars"
              className="mr-sm-2"
              required
            />
            <Button
              className="d-none d-lg-block"
              variant="outline-success"
              type="submit"
            >
              Search
            </Button>
          </Form.Group>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
