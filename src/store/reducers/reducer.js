import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  SET_ERROR,
  FETCH_ONE_MOVIE_SUCESS,
} from "../actions/action";

const initialState = {
  query: null,
  data: [],
  selectedMovie: null,
  total: {
    pages: 0,
    results: 0,
  },
  current_page: 0,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: null,
      };
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        query: action.query,
        data: action.data.results,
        total: {
          pages: action.data.total_pages,
          results: action.data.total_results,
        },
        current_page: action.data.page,
        error: null,
      };
    case FETCH_ONE_MOVIE_SUCESS:
      return {
        ...state,
        selectedMovie: action.data,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
