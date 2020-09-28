import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";

import CustomButton from "../button/Button";
import "./Card.scss";

const CustomCard = (props) => {
  const {
    poster_path,
    id,
    original_language,
    vote_average,
    vote_count,
    title,
    overview,
    release_date,
  } = props.movies;
  const { goToMoviePage } = props;
  return (
    <Col xs={12} sm={12} md={6} lg={4} xl={4} className="mb-3">
      <Card
        className="h-100 customCard text-left"
        onClick={() => goToMoviePage(id, title)}
      >
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Rating Score: {vote_average} from {vote_count} votes.
          </Card.Subtitle>
          <Card.Text>
            <span className="textCard">{overview.slice(0, 100)}</span>
          </Card.Text>
          <CustomButton btnName="See more" />
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Release Date: {release_date ? release_date : "T.B.A"} | Original
            Language: {original_language}
          </small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default React.memo(CustomCard);

CustomCard.propTypes = {
  movies: PropTypes.object,
  goToMoviePage: PropTypes.func,
};
