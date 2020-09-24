import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

import "./MoviePage.scss";
import CustomBreadcrumb from "../../components/breadcrumb/Breadcrumb";

class MoviePage extends Component {
  componentDidMount() {
    this.props.apiOneMovieHandler(this.props.match.params.id);
  }

  movieRender = () => {
    const {
      original_title,
      title,
      release_date,
      overview,
      poster_path,
      tagline,
      vote_average,
      production_companies,
      genres,
    } = this.props.selectedMovie;

    return (
      <Fragment>
        <Col md={12} lg={6} xl={6}>
          <div className="imageBadge">
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={original_title}
              className="w-100"
            />
            <Badge
              variant="primary"
              className="position-absolute p-3 customBadge"
            >
              {vote_average} / 10
            </Badge>
          </div>
        </Col>
        <Col md={12} lg={6} xl={6} className="p-3">
          <h1 className="text-primary font-weight-bold">{title}</h1>
          <h3 className="text-muted mt-2 mb-2">
            {tagline && '"' + tagline + '"'}
          </h3>
          <small className="mt-2 mb-2">Genre:</small>
          {genres.map((item) => (
            <Badge key={item.name} variant="primary mr-2 ml-2 p-1">
              {item.name}
            </Badge>
          ))}
          <h3 className="text-primary mt-4 pt-4 mb-2 font-weight-bold border-top border-primary">
            Overview
          </h3>
          <p className="mt-2 mb-2">{overview}</p>
          <small className="d-none d-block mt-2 mb-2 pb-4 border-bottom border-primary">
            Release Date: {release_date}
          </small>
          <h3 className="text-primary font-weight-bold">
            Production Companies
          </h3>
          {production_companies.map((item) =>
            item.logo_path !== null ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.logo_path}`}
                alt={item.name}
                title={item.name}
                key={item.name}
                className="w-25 m-3"
              />
            ) : (
              <i key={item.name}>{item.name}</i>
            )
          )}
        </Col>
      </Fragment>
    );
  };

  render() {
    return (
      <Fragment>
        <CustomBreadcrumb />
        <Row className="p-sm-2 p-md-4 bg-info text-left" noGutters>
          {this.props.selectedMovie && this.movieRender()}
        </Row>
      </Fragment>
    );
  }
}

export default React.memo(withRouter(MoviePage));
