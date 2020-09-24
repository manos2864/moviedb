import React, { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";

import { asyncGet, setError, asyncGetOneMovie } from "../store/actions/action";
import CustomSpinner from "../components/spinner/Spinner";
import Header from "../components/header/Header";
import CustomToast from "../components/toast/Toast";
import Footer from "../components/footer/Footer";

const HomeLazy = lazy(() => import("./home/Home"));
const MovieLazy = lazy(() => import("./moviePage/MoviePage"));
const AboutLazy = lazy(() => import("./about/About"));

class App extends Component {
  render() {
    return (
      <Container className="text-center">
        <Header queryHandler={this.props.apiHandler} />

        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Suspense fallback={<CustomSpinner />}>
                <HomeLazy
                  apiHandler={this.props.apiHandler}
                  current_page={this.props.current_page}
                  total={this.props.total}
                  data={this.props.data}
                  query={this.props.query}
                />
              </Suspense>
            )}
          />
          <Route
            path="/movie/:title&:id"
            render={() => (
              <Suspense fallback={<CustomSpinner />}>
                <MovieLazy
                  apiOneMovieHandler={this.props.apiOneMovieHandler}
                  selectedMovie={this.props.selectedMovie}
                />
              </Suspense>
            )}
          />
          <Route
            path="/about-us"
            render={() => (
              <Suspense fallback={<CustomSpinner />}>
                <AboutLazy />
              </Suspense>
            )}
          />
          <Route render={() => <h1>404 ERROR PAGE</h1>} />
        </Switch>
        <CustomToast
          errorHandler={this.props.setError}
          error={this.props.error}
        />
        <Footer />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    data,
    error,
    total,
    query,
    current_page,
    selectedMovie,
  } = state.movies;

  return {
    query: query,
    data: data,
    total: total,
    error: error,
    current_page: current_page,
    selectedMovie: selectedMovie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setError: () => dispatch(setError()),
    apiHandler: (query, page) => dispatch(asyncGet(query, page)),
    apiOneMovieHandler: (id) => dispatch(asyncGetOneMovie(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
