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
            .sort((a, b) => filterSorting(a, b))
            .map((movie) => (
              <Suspense key={movie.id} fallback={<CustomSpinner />}>
                <CustomCard
                  key={movie.id}
                  movies={movie}
                  goToMoviePage={goToMoviePage}
                />
              </Suspense>
            ))}
      </CardGroup>
    </Row>
  );
};

export default CardLayout;
