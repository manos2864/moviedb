import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import CustomPagination from "../../components/pagination/Pagination";
import Toolbar from "../../components/toolbar/Toolbar";
import CardLayout from "../../components/card/CardLayout";
import AnimatedBike from "../../components/animatedBike/AnimatedBike";
import AnimatedHorror from "../../components/animatedHorror/AnimatedHorror";
import CustomCarousel from "../../components/carousel/Carousel";

import { asyncGet } from "../../store/actions/action";
import {
  dataFilterSelectorMemo,
  totalSelectorMemo,
  querySelectorMemo,
  current_pageSelectorMemo,
} from "../../store/selectors/selectors";

const Home = ({ router }) => {
  const [filter, setFilter] = useState("release_date");

  const dispatch = useDispatch();

  const data = useSelector(dataFilterSelectorMemo);
  const total = useSelector(totalSelectorMemo);
  const query = useSelector(querySelectorMemo);
  const current_page = useSelector(current_pageSelectorMemo);

  // Default Movies Data for the Home Page
  useEffect(() => {
    dispatch(asyncGet("a", 1));
  }, [dispatch]);

  const filterHandler = (myFilter) => {
    setFilter(myFilter);
  };

  const movieSelectedHandler = (id, title) => {
    router.history.push({
      pathname: "/movie/" + title.toLowerCase().replaceAll(" ", "-") + "&" + id,
    });
  };

  const filterSorting = (a, b) => {
    switch (filter) {
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

  return (
    <Fragment>
      <CustomCarousel
        slideText={{
          horror: {
            h3Text: "Welcome to the Movie World!",
            pText: "Search and find informations for your movie!",
            component: <AnimatedHorror />,
          },
          bike: {
            h3Text: "Easy navigation like riding a bike!",
            pText: "Hey! Enjoy the ride to this amazing site.",
            component: <AnimatedBike />,
          },
        }}
      />

      <Toolbar
        results={total.results}
        filterHandler={filterHandler}
        filter={filter}
      />

      <CardLayout
        data={data}
        filterSorting={filterSorting}
        goToMoviePage={movieSelectedHandler}
      />

      <CustomPagination
        query={query}
        active={current_page}
        pages={total.pages}
        pageHandler={(query, num) => dispatch(asyncGet(query, num))}
      />
    </Fragment>
  );
};

export default Home;

Home.propTypes = {
  router: PropTypes.object,
};
