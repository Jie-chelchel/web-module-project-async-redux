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

export const fetchNameRequest = () => {
  return {
    type: "NAME_REQUEST",
  };
};
export const fetchNameSuccess = (quotes) => {
  return {
    type: "NAME_SUCCESS",
    payload: quotes,
  };
};
export const fetchNameFailure = (err) => {
  return {
    type: "NAME_FAILURE",
    payload: err,
  };
};
export const fetchByName = (name) => {
  return (dispatch) => {
    dispatch(fetchNameRequest());

    gameOfThrones
      .get(`/author/${name}/5`)
      .then((res) => {
        const nameQuote = res.data;
        console.log(nameQuote);
        dispatch(fetchNameSuccess(nameQuote));

        console.log(nameQuote);
      })
      .catch((err) => dispatch(fetchNameFailure(err.message)));
  };
};
