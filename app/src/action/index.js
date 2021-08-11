import gameOfThrones from "../apis/gameOfThrones";

export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};
export const fetchSuccess = (quotes) => {
  return {
    type: FETCH_SUCCESS,
    payload: quotes,
  };
};

export const fetchFailure = (err) => {
  return {
    type: FETCH_FAILURE,
    payload: err,
  };
};

const fetchRandom = () => {
  return (dispatch) => {
    dispatch(fetchRequest());

    gameOfThrones
      .get("/random")
      .then((res) => {
        const randomQuote = res.data;
        dispatch(fetchSuccess(randomQuote));
      })
      .catch((err) => dispatch(fetchFailure(err.message)));
  };
};

export default fetchRandom;

export const fetchByName = (name) => {
  return (dispatch) => {
    dispatch(fetchRequest());

    gameOfThrones
      .get(`/author/${name}`)
      .then((res) => {
        const nameQuote = res.data;
        dispatch(fetchSuccess(nameQuote));
        console.log(nameQuote);
      })
      .catch((err) => dispatch(fetchFailure(err.message)));
  };
};
