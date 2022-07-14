import { useEffect, useReducer, useState } from "react";
import { getData } from "../../Api-data/data";
import { reducerFunc } from "../../Reducer/reducerFun";
import { InitialState } from "./quiz-types";
import { Button, FormControl, TextField, Typography } from "@mui/material";
import "../Quiz/Quiz.css";
export const Quiz = () => {
  const [validate, setValidate] = useState(false);

  const initialState: InitialState = {
    inputAnswer: "",
    loading: false,
    data: [],
    error: "",
    message: "",
  };

  const [state, dispatch] = useReducer(reducerFunc, initialState);
  const { inputAnswer, loading, data, error, message } = state;

  const submitHandler = () => {
    if (!inputAnswer) {
      setValidate(true);
      return;
    }
    const answer = data.map((quiz: any) => quiz.answer).toString();
    if (inputAnswer === answer) {
      dispatch({ type: "SHOW_MESSAGE", payload: "Correct Answer" });
    } else {
      dispatch({ type: "SHOW_MESSAGE", payload: "Wrong Answer" });
    }
    getData(dispatch);
  };

  useEffect(() => {
    getData(dispatch);
  }, []);

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {data &&
        data.map(({ id, question }: { id: number; question: string }) => (
          <div key={id}>
            <Typography className="question">
              <strong>Question:</strong> {question} ?
            </Typography>
          </div>
        ))}
      <FormControl>
        <TextField
          error={validate ? true : false}
          label="Enter answer"
          id={validate ? "outlined-error-helper-text" : "filled-basic"}
          helperText={validate && "Please Enter Answer"}
          sx={{ marginTop: 3 }}
          variant="filled"
          onChange={(e) => {
            dispatch({ type: "INPUT_ANSWER", payload: e.target.value });
            setValidate(false);
            dispatch({ type: "SHOW_MESSAGE", payload: "" });
          }}
          type="text"
        />
        <Button
          sx={{ marginTop: 3 }}
          variant="contained"
          onClick={submitHandler}
        >
          Submit
        </Button>
        <h4 style={{ color: message === "Correct Answer" ? "#84cc16" : "red" }}>
          {message}
        </h4>
      </FormControl>
      {error && <h2>{error}</h2>}
    </div>
  );
};
