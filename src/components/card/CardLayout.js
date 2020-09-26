import React, { Suspense, lazy } from "react";
import Row from "react-bootstrap/Row";
import CardGroup from "react-bootstrap/CardGroup";

import CustomSpinner from "../spinner/Spinner";
const CustomCard = lazy(() => import("./Card"));

const CardLayout = (props) => {
  const { data, goToMoviePage, filterSorting } = props;

  return (
    <Row className="align-items-center bg-info p-sm-2 p-md-2 ml-0 mr-0">
      <CardGroup>
        {data.length > 0 &&
          data
            .filter((movie) => movie.poster_path) //Only Movies with Images Allowed
            .sort((a, b) => filterSorting(a, b))
            .map((movie) => (
              <Suspense key={movie.id} fallback={<CustomSpinner />}>
                <CustomCard movies={movie} goToMoviePage={goToMoviePage} />
              </Suspense>
            ))}
      </CardGroup>
    </Row>
  );
};

export default CardLayout;
