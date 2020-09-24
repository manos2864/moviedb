import React, { Component, Suspense, lazy, Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { withRouter } from "react-router-dom";

import CustomSpinner from "../../components/spinner/Spinner";
import CustomPagination from "../../components/pagination/Pagination";
import Toolbar from "../../components/toolbar/Toolbar";

// Lazy load
const CustomCard = lazy(() => import("../../components/card/Card"));

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "release_date", // default filter
    };
  }

  // Default Movies Data for the Home Page
  componentDidMount() {
    this.props.apiHandler("a", 1);
  }

  filterHandler = (myFilter) => {
    this.setState({ filter: myFilter });
  };

  movieSelectedHandler = (id, title) => {
    this.props.history.push({
      pathname: "/movie/" + title.toLowerCase().replaceAll(" ", "-") + "&" + id,
    });
  };

  filterSorting = (a, b) => {
    switch (this.state.filter) {
      case "release_date":
        const second = Date.parse(b.release_date);
        const first = Date.parse(a.release_date);
        return second - first;
      case "rating":
        return b.vote_average - a.vote_average;
      case "popularity":
        return b.vote_count - a.vote_count;
      default:
        return b.vote_average - a.vote_average;
    }
  };

  render() {
    return (
      <Fragment>
        <Toolbar
          results={this.props.total.results}
          filterHandler={this.filterHandler}
          filter={this.state.filter}
        />
        <Row className="align-items-center bg-info p-sm-2 p-md-2 ml-0 mr-0">
          {this.props.data.length > 0 &&
            this.props.data
              .filter((movie) => movie.poster_path) //Only Movies with Images Allowed
              .sort((a, b) => this.filterSorting(a, b))
              .map((movie) => (
                <Suspense key={movie.id} fallback={<CustomSpinner />}>
                  <CustomCard
                    movies={movie}
                    goToMoviePage={this.movieSelectedHandler}
                  />
                </Suspense>
              ))}

          {this.props.current_page < this.props.total.pages && (
            <h3 className="text-primary d-none d-md-block">
              Go to page {this.props.current_page + 1}
            </h3>
          )}
        </Row>
        <Row className="p-4">
          <Col className="text-center">
            <CustomPagination
              query={this.props.query}
              active={this.props.current_page}
              pages={this.props.total.pages}
              pageHandler={this.props.apiHandler}
            />
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default withRouter(Home);
