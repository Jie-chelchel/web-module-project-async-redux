import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "../action";
const initialState = {
  loading: false,
  randomQuotes: [],
  error: "",
};

const randomReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case FETCH_SUCCESS:
      return {
        loading: false,
        randomQuotes: [...state.randomQuotes, action.payload],
        error: "",
      };
    case FETCH_FAILURE:
      return {
        loading: false,
        randomQuotes: [...state.randomQuotes],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default randomReducer;
