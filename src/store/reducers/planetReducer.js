import axios from "axios";

const PLANETS_URL = "https://swapi.dev/api/planets";

const initialState = { planets: [], status: null };

const planetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, status: "loading" };
    case "SET_REQUEST":
      return { ...state, planets: action.payload, status: "succeeded" };
    case "SET_FAILED":
      return { ...state, status: "failed" };
    default:
      return state;
  }
};
export const fetchPlanets = () => {
  return async (dispatch) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(PLANETS_URL);
      dispatch({ type: "SET_REQUEST", payload: res.data.results });
    } catch (err) {
      dispatch({ type: "SET_FAILED" });
    }
  };
};
export default planetReducer;
