const initialState = {
  loading: false,
  nameQuotes: [],
  error: "",
};

const searchNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NAME_REQUEST":
      return {
        ...state,
        loading: false,
      };
    case "NAME_SUCCESS":
      return {
        loading: false,
        nameQuotes: [action.payload],
        error: "",
      };
    case "NAME_FAILURE":
      return {
        loading: false,
        nameQuotes: [...state.nameQuotes],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default searchNameReducer;
