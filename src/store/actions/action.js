import axios from "axios";

export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_ERROR = "FETCH_MOVIES_ERROR";
export const SET_ERROR = "SET_ERROR";
export const FETCH_ONE_MOVIE_SUCESS = "FETCH_ONE_MOVIE_SUCESS";

const api_key = "0d5864f9b807f9abf2b13d418f70ffcb";

function fetchMoviesSuccess(data, query) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    data: data,
    query: query,
  };
}

function fetchOneMovieSuccess(data) {
  return {
    type: FETCH_ONE_MOVIE_SUCESS,
    data: data,
  };
}

function fetchMoviesError(error) {
  return {
    type: FETCH_MOVIES_ERROR,
    error: error,
  };
}

export const setError = () => {
  return {
    type: SET_ERROR,
  };
};

export const asyncGet = (query, page) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=${page}&include_adult=false`
      )
      .then((item) => {
        if (item.data.status_message) {
          dispatch(fetchMoviesError(item.data.status_message));
        } else {
          dispatch(fetchMoviesSuccess(item.data, query));
        }

        return item;
      })
      .catch((err) => dispatch(fetchMoviesError(err.toString())));
  };
};

export const asyncGetOneMovie = (id) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
      )
      .then((item) => {
        if (item.data.status_message) {
          dispatch(fetchMoviesError(item.data.status_message));
        } else {
          dispatch(fetchOneMovieSuccess(item.data));
        }

        return item;
      })
      .catch((err) => dispatch(fetchMoviesError(err.toString())));
  };
};
