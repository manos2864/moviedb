import React, { useEffect, Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import PropTypes from "prop-types";

import "./MoviePage.scss";
import CustomBreadcrumb from "../../components/breadcrumb/Breadcrumb";
import { asyncGetOneMovie } from "../../store/actions/action";
import { selectedMovieSelectorMemo } from "../../store/selectors/selectors";

const MoviePage = ({ router }) => {
  const [imageStatus, setImageStatus] = useState("loading");

  const dispatch = useDispatch();

  const selectedMovie = useSelector(selectedMovieSelectorMemo);

  useEffect(() => {
    dispatch(asyncGetOneMovie(router.match.params.id));
  }, [dispatch, router.match.params.id]);

  const handleImageLoaded = () => {
    setImageStatus("loaded");
  };

  const handleImageErrored = () => {
    setImageStatus("error");
  };

  const movieRender = () => {
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
    } = selectedMovie;

    return (
      <Fragment>
        <Col md={12} lg={6} xl={6}>
          <div className="imageBadge">
            <Badge
              variant="primary"
              className="position-absolute p-3 customBadge"
            >
              {vote_average} / 10
            </Badge>
            <div className="imagePost">
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={original_title}
                onLoad={handleImageLoaded}
                onError={handleImageErrored}
                className="w-100 p-3"
              />
            </div>
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

  const prerender = () => {
    return (
      <Fragment>
        {imageStatus !== "loaded" && (
          <Col md={12} lg={6} xl={6}>
            <div className="imageBadge">
              <div className="imagePost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="500"
                  className="p-3"
                  viewBox="0 0 100% 500"
                >
                  <rect fill="#ddd" width="100%" height="500" />
                </svg>
              </div>
            </div>
          </Col>
        )}
        {imageStatus !== "loaded" && (
          <Col md={12} lg={6} xl={6} className="p-3">
            <h1 className="text-primary font-weight-bold">
              <div className="w-100 placeholderText"></div>
            </h1>
            <h3 className="text-muted mt-2 mb-2">
              <div className="w-75 placeholderText"></div>
            </h3>
            <small className="mt-2 mb-2">Genre: No Idea</small>

            <h3 className="text-primary mt-4 pt-4 mb-2 font-weight-bold border-top border-primary">
              Overview
            </h3>

            <div className="w-100 placeholderText"></div>
            <div className="w-100 mt-3 placeholderText"></div>
            <div className="w-50 mt-3 placeholderText"></div>
            <div className="w-50 mt-3 placeholderText"></div>

            <small className="d-none d-block mt-2 mb-2 pb-4 border-bottom border-primary">
              Release Date: Who knows? Probably TBA
            </small>
            <h3 className="text-primary font-weight-bold">
              Production Companies
            </h3>
          </Col>
        )}
      </Fragment>
    );
  };

  return (
    <Fragment>
      <CustomBreadcrumb />
      <Row className="p-sm-2 p-md-4 bg-info text-left" noGutters>
        {selectedMovie ? movieRender() : prerender()}
      </Row>
    </Fragment>
  );
};

export default MoviePage;

MoviePage.propTypes = {
  router: PropTypes.object,
};
