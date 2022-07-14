import axios from "axios";

export const getData = async (dispatch: any) => {
  try {
    dispatch({ type: "LOADING", payload: true });
    const { data } = await axios.get("https://jservice.io/api/random");
    dispatch({ type: "LOADING", payload: false });
    dispatch({ type: "DATA", payload: data });
  } catch (error) {
    if (error instanceof Error) {
      dispatch({ type: "ERROR", payload: error.message });
    } else {
      dispatch({ type: "ERROR", payload: error });
    }
    dispatch({ type: "LOADING", payload: false });
  }
};
