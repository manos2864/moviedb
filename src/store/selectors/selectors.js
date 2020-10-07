import { createSelector } from "reselect";

const dataSelector = (state) => state.movies.data;
const totalSelector = (state) => state.movies.total;
const querySelector = (state) => state.movies.query;
const current_pageSelector = (state) => state.movies.current_page;
const errorSelector = (state) => state.movies.error;
const selectedMovieSelector = (state) => state.movies.selectedMovie;

export const dataFilterSelectorMemo = createSelector(
  dataSelector,
  //Only Movies with Images Allowed
  (data) => data.filter((data) => data.poster_path)
);
export const totalSelectorMemo = createSelector(totalSelector, (data) => data);
export const querySelectorMemo = createSelector(querySelector, (data) => data);
export const current_pageSelectorMemo = createSelector(
  current_pageSelector,
  (data) => data
);
export const errorSelectorMemo = createSelector(errorSelector, (data) => data);
export const selectedMovieSelectorMemo = createSelector(
  selectedMovieSelector,
  (data) => data
);
