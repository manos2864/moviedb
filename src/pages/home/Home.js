import React, { Component, Fragment } from "react";

import { withRouter } from "react-router-dom";

import CustomPagination from "../../components/pagination/Pagination";
import Toolbar from "../../components/toolbar/Toolbar";
import CardLayout from "../../components/card/CardLayout";
import AnimatedBike from "../../components/animatedBike/AnimatedBike";

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
        <AnimatedBike />
        <Toolbar
          results={this.props.total.results}
          filterHandler={this.filterHandler}
          filter={this.state.filter}
        />
        <CardLayout
          data={this.props.data}
          filterSorting={this.filterSorting}
          goToMoviePage={this.movieSelectedHandler}
        />

        <CustomPagination
          query={this.props.query}
          active={this.props.current_page}
          pages={this.props.total.pages}
          pageHandler={this.props.apiHandler}
        />
      </Fragment>
    );
  }
}

export default withRouter(Home);
