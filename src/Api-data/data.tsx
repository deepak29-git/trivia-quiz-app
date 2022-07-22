import axios from "axios";

export const getData = async (dispatch: any) => {
  try {
    dispatch({ type: "LOADING", payload: true });
    const {
      data: { results },
    } = await axios.get("https://opentdb.com/api.php?amount=1");
    dispatch({ type: "LOADING", payload: false });
    dispatch({ type: "DATA", payload: results });
  } catch (error) {
    if (error instanceof Error) {
      dispatch({ type: "ERROR", payload: error.message });
    } else {
      dispatch({ type: "ERROR", payload: error });
    }
    dispatch({ type: "LOADING", payload: false });
  }
};
